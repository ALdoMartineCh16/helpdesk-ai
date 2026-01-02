# HelpDesk AI

Sistema de HelpDesk inteligente que clasifica tickets automáticamente utilizando un servicio de inteligencia artificial. El proyecto consta de tres componentes principales integrados para ofrecer una experiencia completa de gestión de incidencias.

## Estructura del Proyecto

El sistema se divide en tres carpetas principales, cada una correspondiendo a un microservicio o capa de la aplicación:

- **frontend/**: Aplicación de interfaz de usuario construida con React, Vite y TailwindCSS.
- **backend/**: Servidor API RESTful construido con Node.js, Express y Prisma ORM.
- **ai-service/**: Microservicio de clasificación de texto construido con Python y FastAPI.
- **database/**: Archivos relacionados con la base de datos (migraciones, esquemas).

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado el siguiente software en tu entorno:

- **Node.js** (v18 o superior)
- **Python** (v3.9 o superior)
- **PostgreSQL** (Motor de base de datos)

---

## Guía de Instalación y Ejecución

Para ejecutar el sistema completo, deberás configurar e iniciar cada componente en una terminal separada.

### 1. Base de Datos y Backend

El backend gestiona la lógica de negocio y la conexión con la base de datos PostgreSQL.

1.  **Navegar al directorio del backend:**
    ```bash
    cd backend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la carpeta `backend` y añade lo siguiente (ajusta `DATABASE_URL` con tus credenciales de PostgreSQL):
    ```env
    PORT=3000
    DATABASE_URL="postgresql://usuario:password@localhost:5432/helpdesk_ai?schema=public"
    JWT_SECRET="clave_secreta_para_tokens"
    AI_SERVICE_URL="http://localhost:8000/predict"
    ```

4.  **Ejecutar migraciones de base de datos:**
    Esto creará las tablas necesarias en tu base de datos PostgreSQL.
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Iniciar el servidor backend:**
    ```bash
    npm run dev
    ```
    > El backend estará corriendo en: `http://localhost:3000`

### 2. Servicio de Inteligencia Artificial (AI Service)

Este servicio recibe descripciones de tickets y determina su categoría automáticamente.

1.  **Navegar al directorio del servicio de AI:**
    (Abre una nueva terminal)
    ```bash
    cd ai-service
    ```

2.  **Crear entorno virtual (Recomendado):**
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate
    
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **Instalar dependencias:**
    ```bash
    pip install fastapi uvicorn
    ```

4.  **Iniciar el servicio:**
    ```bash
    uvicorn main:app --reload --port 8000
    ```
    > El servicio de IA estará corriendo en: `http://localhost:8000`

### 3. Frontend

La interfaz visual para que los usuarios creen y vean sus tickets.

1.  **Navegar al directorio del frontend:**
    (Abre una nueva terminal)
    ```bash
    cd frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    npm run dev
    ```
    > El frontend generalmente correrá en: `http://localhost:5173` (verifique la consola para el puerto exacto).

---

## Flujo de Uso

1.  Abre el navegador en la URL proporcionada por el Frontend (ej. `http://localhost:5173`).
2.  Regístrate o inicia sesión en la aplicación.
3.  Crea un nuevo ticket describiendo un problema (ej. "La impresora no responde" o "El internet está muy lento").
4.  El sistema enviará la descripción al **AI Service**, clasificará el ticket (ej. "Hardware" o "Red") y lo guardará en la base de datos.
5.  Podrás ver el ticket creado con su categoría asignada en el tablero principal.