import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Load environmental variables from .env file
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost:5432/lokesh")

# Create engine for database connection
engine = create_engine(DATABASE_URL)

# Configure sessionmaker for database operations
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for SQLAlchemy declarative models
Base = declarative_base()

# Dependency generator to inject DB sessions into routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
