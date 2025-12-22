# Backend: OSF Cost Prediction API

This folder contains a Flask API implementing a simple Random Forest-based cost estimator.

Quick start

1. Create a Python venv and activate it:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1   # PowerShell
# or
.\.venv\Scripts\activate.bat   # cmd.exe
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the server:

```powershell
python app.py
```

Endpoints

- `GET /` - API docs
- `GET /api/services` - list services
- `POST /api/predict` - JSON body: `{ "service": "Logo Design" }`
- `GET /api/predict-all` - predictions for all services
- `GET /health` - health check

Notes

- The model is trained on startup using synthetic data.
- Predictions are optionally saved to `predictions/` in the backend folder.
