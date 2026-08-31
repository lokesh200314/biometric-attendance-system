from sqlalchemy.orm import Session
from auth.auth_model import User

class AuthService:
    @staticmethod
    def authenticate_user(db: Session, email: str, password: str) -> User:
        user = db.query(User).filter(User.email == email).first()
        if not user or not user.password == password:
            return None
        return user
