from app.api.v1.events import router as events_router
from fastapi import FastAPI

app = FastAPI(
    title="Archery Platform API",
    version="0.1.0",
)

app.include_router(events_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {"status": "ok"}