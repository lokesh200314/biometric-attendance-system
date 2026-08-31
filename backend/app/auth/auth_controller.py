from fastapi import HTTPException
from sqlalchemy.orm import Session
from auth.auth_schema import LoginRequest
from auth.auth_service import AuthService


class AuthController:
       
    @staticmethod
    def login(db: Session, login_data: LoginRequest):

        print("Login Request:", login_data)
        
        user = AuthService.authenticate_user(
            db,
            login_data.email,
            login_data.password
        )

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        return {
            "message": "Login Sucessfull",
            "user": {
                "email": user.email,
                "password": user.password
            }
        }


