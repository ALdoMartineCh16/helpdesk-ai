# Helpdesk-AI

Plataforma de Gestión de Incidencias con IA

Este proyecto es una plataforma full-stack para la gestión de incidencias (tickets) que integra un microservicio de Inteligencia Artificial para clasificar automáticamente los reportes según su descripción. Está diseñada con una arquitectura modular y escalable para uso profesional.

---

## 🚀 Tecnologías principales

### Frontend
- React (Vite)
- Axios
- TailwindCSS o Material UI

### Backend
- Node.js + Express
- PostgreSQL
- JWT para autenticación
- Sequelize o Prisma (según implementación)

### Servicio de IA
- Python
- FastAPI
- scikit-learn / spaCy / transformers (dependiendo del modelo)

### Infraestructura y herramientas
- Docker (opcional para despliegue)
- GitHub Projects (Kanban)
- GitHub Actions (CI/CD)
- ESLint / Prettier

---

## 🧱 Arquitectura

Frontend (React)
↓
Backend REST (Node.js / Express)
↓
PostgreSQL (DB)
↓
AI Microservice (FastAPI + Python)

## 📁 Estructura del proyecto

helpdesk-ai/
│
├── backend/ # API REST con Node.js
├── frontend/ # Interfaz web con React
├── ai-service/ # Microservicio de IA con FastAPI
├── docs/ # Arquitectura, especificaciones y documentación
├── database/ # Esquemas y migraciones SQL
├── LICENSE # MIT
└── README.md

## 📌 Estado del proyecto

- [x] Estructura base del repositorio
- [x] Backend mínimo con Express
- [x] Microservicio IA base con FastAPI
- [x] Documentación inicial en `docs/`
- [ ] Integración API → AI
- [ ] Modelos de BD y migraciones
- [ ] Login y JWT
- [ ] CRUD de tickets
- [ ] UI en React

## 🛠️ Instalación y ejecución rápida (local)

### Backend
```bash
cd backend
npm install
npm run dev

Visita: http://localhost:3000
```
### AI Service
```bash
cd ai-service
# (recomendado: crear y activar un venv)
python -m venv venv
# Windows CMD:
venv\Scripts\activate.bat
# PowerShell:
.\venv\Scripts\Activate.ps1
pip install fastapi uvicorn pydantic
uvicorn main:app --reload --port 8000

Visita: http://localhost:8000 y http://localhost:8000/docs
```