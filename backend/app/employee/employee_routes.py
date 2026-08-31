from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from employee.employee_schema import EmployeeCreate, EmployeeResponse
from employee.employee_controller import EmployeeController

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.post("/", response_model=EmployeeResponse)
def create_employee(
    employee_in: EmployeeCreate,
    db: Session = Depends(get_db)
):
    return EmployeeController.create_employee(db, employee_in)
