# Employee Expense & Reimbursement Management System

A premium real-time tracker for managing employee business claims, category filtering, and approvals. Built with a modern **React JS (Tailwind CSS) frontend** and a high-performance **Python FastAPI backend** connected to **PostgreSQL**.

## Project Structure

```text
├── backend/                  # Python FastAPI Backend
│   ├── .venv/                # Virtual environment
│   ├── main.py               # API endpoints & configuration
│   ├── database.py           # SQLAlchemy configuration
│   ├── models.py             # Database schemas
│   └── requirements.txt      # Python dependencies
├── frontend/                 # React Frontend (Vite)
│   ├── src/                  # App components & styles
│   │   ├── App.jsx           # Real-time Expense dashboard
│   │   └── Routes.jsx        # Routing configuration
│   ├── components/           # Reusable input & button components
│   └── package.json          # React dependencies
├── package.json              # Root script orchestration
└── README.md                 # Project documentation
```

## Quick Start Setup

Ensure you have [Node.js (v18+)](https://nodejs.org/) and [Python (3.10+)](https://www.python.org/) installed.

### 1. Install Dependencies

You can install all root and frontend dependencies with a single command:

```bash
npm run install:all
```

### 2. Run Concurrently

Start both the frontend and backend servers together:

```bash
npm run dev
```

This will concurrently boot:
- **FastAPI backend** running on [http://localhost:8000](http://localhost:8000)
- **Vite React frontend** running on [http://localhost:5173](http://localhost:5173)

---

## Separate Components Guide

### Backend (Python FastAPI)

1. Navigate to the `backend/` directory.
2. Activate the virtual environment:
   ```bash
   source .venv/bin/activate
   ```
3. Run the development server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

Interactive API documentation will be available at [http://localhost:8000/docs](http://localhost:8000/docs).
