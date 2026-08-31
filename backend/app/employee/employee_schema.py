from pydantic import BaseModel
from typing import Optional

class EmployeeBase(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    department: Optional[str] = None
    salary: Optional[float] = None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeResponse(EmployeeBase):
    id: int

    class Config:
        from_attributes = True
