from fastapi import APIRouter

router = APIRouter(prefix="/events", tags=["Events"])

@router.get("/")
def list_events():
    return []
