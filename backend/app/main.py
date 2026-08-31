from fastapi import FastAPI

from database import engine, Base
from employee.employee_routes import router as employee_router
from auth.auth_routes import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Employee Management API")

app.include_router(employee_router)
app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "Employee Management API"
    }

