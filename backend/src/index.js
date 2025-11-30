require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');      // <- nuevo
const ticketRoutes = require('./routes/tickets.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tickets', ticketRoutes);

app.get('/', (req, res) => {
    res.json({ ok: true, msg: 'Helpdesk AI backend funcionando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
