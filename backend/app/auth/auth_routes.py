from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from auth.auth_schema import LoginRequest, LoginResponse
from auth.auth_controller import AuthController

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login", response_model=LoginResponse)
def login_request(
    login_data: LoginRequest,
    db: Session = Depends(get_db)
):
    return AuthController.login(db, login_data)
