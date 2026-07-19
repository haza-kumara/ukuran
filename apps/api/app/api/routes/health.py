from typing import Literal

from fastapi import APIRouter
from pydantic import BaseModel

from app.core.config import get_settings


router = APIRouter(tags=["Health"])

settings = get_settings()


class HealthResponse(BaseModel):
    status: Literal["healthy"]
    service: str
    version: str


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Check API health",
)
async def health_check() -> HealthResponse:
    return HealthResponse(
        status="healthy",
        service="ukuran-api",
        version=settings.app_version,
    )
