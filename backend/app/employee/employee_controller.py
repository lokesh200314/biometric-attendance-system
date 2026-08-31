from sqlalchemy.orm import Session
from employee.employee_schema import EmployeeCreate
from employee.employee_service import EmployeeService

class EmployeeController:
    @staticmethod
    def create_employee(db: Session, employee_in: EmployeeCreate):
        return EmployeeService.create_employee(db, employee_in)
