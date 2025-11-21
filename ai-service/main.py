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
    # placeholder — en training lo reemplazaremos con modelo real
    return {"category": "general", "confidence": 0.5}