const express = require('express');
const prisma = require('../prismaClient');
const router = express.Router();
const axios = require('axios');

const AI_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000/predict';

// CREAR TICKET con llamada a AI
router.post('/', async (req, res) => {
    const { title, description, userId } = req.body;
    try {
        // 1) crear ticket provisional sin category
        const ticket = await prisma.ticket.create({
            data: { title, description, userId }
        });

        // 2) enviar texto al AI service (no bloquear la respuesta si falla)
        try {
            const resp = await axios.post(AI_URL, { text: description }, { timeout: 5000 });
            const { category, confidence } = resp.data || {};
            if (category) {
                await prisma.ticket.update({
                    where: { id: ticket.id },
                    data: { category }
                });
                ticket.category = category;
            }
            ticket.aiConfidence = confidence;
        } catch (aiErr) {
            console.warn('AI service failed:', aiErr.message);
            // No devolvemos error por fallo de AI; ticket ya creado.
        }

        res.status(201).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear ticket' });
    }
});
