from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Ticket(BaseModel):
    text: str

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Ticket(BaseModel):
    text: str

@app.get("/")
def read_root():
    return {"ok": True, "service": "ai-service"}

@app.post("/predict")
def predict(ticket: Ticket):
    # Lógica básica de palabras clave (Mock AI)
    text_lower = ticket.text.lower()
    
    if any(word in text_lower for word in ["impresora", "pantalla", "mouse", "teclado", "disco", "hardware", "encender"]):
        return {"category": "hardware", "confidence": 0.95}
    
    if any(word in text_lower for word in ["wifi", "internet", "red", "conexión", "lento"]):
        return {"category": "network", "confidence": 0.85}
        
    if any(word in text_lower for word in ["login", "acceso", "password", "contraseña", "usuario"]):
        return {"category": "access", "confidence": 0.90}

    return {"category": "general", "confidence": 0.5}