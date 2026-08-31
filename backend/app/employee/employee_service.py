from sqlalchemy.orm import Session
from employee.employee_model import Employee
from employee.employee_schema import EmployeeCreate

class EmployeeService:
    @staticmethod
    def create_employee(db: Session, employee_in: EmployeeCreate) -> Employee:
        db_employee = Employee(**employee_in.model_dump())
        db.add(db_employee)
        db.commit()
        db.refresh(db_employee)
        return db_employee
