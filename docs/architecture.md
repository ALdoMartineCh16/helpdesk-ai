# Arquitectura del sistema - Helpdesk AI

Resumen:
- Frontend: React (Vite) — SPA para crear y gestionar tickets.
- Backend: Node.js + Express — API REST (autenticación, CRUD tickets, usuarios).
- Base de datos: PostgreSQL — tablas: users, tickets, ticket_history, attachments.
- AI service: Python + FastAPI — endpoint /predict que clasifica texto.
- Despliegue: Docker Compose (backend, frontend, ai-service, postgres).

Flujo:
1. Usuario crea ticket en Frontend.
2. Frontend llama a Backend (POST /tickets).
3. Backend guarda ticket en PostgreSQL y solicita clasificación al AI service.
4. AI service responde con categoría y confianza; Backend actualiza ticket.