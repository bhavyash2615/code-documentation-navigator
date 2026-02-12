# Getting Started

Welcome to **Code Documentation Navigator** 👋  
This guide will walk you through setting up the project locally, running it on your machine, and understanding how the pieces fit together.

---

## Prerequisites

Make sure you have the following installed:

- Python 3.9 or higher
- Git
- A code editor (VS Code recommended)
- A Groq API key (Get one here)
- A ScaleDown API key (optional but recommended) (Get one here)

Verify Python installation:
```bash
python --version
```

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/code-documentation-navigator.git
cd code-documentation-navigator
```

### 2. Create and activate a virtual environment
From the project root, run:
```bash
python -m venv venv
```
Windows : 
```bash
venv\Scripts\activate 
```
macOS / Linux : 
```bash
source venv/bin/activate
```
You should now see (venv) in your terminal prompt.

### 3. Install Backend Dependencies
```bash
pip install -r requirements.txt
```
If you see warnings about pip versions, they can be safely ignored.

### 4. Environment Variables
This project uses API keys that must not be hard-coded.
1️. Create a .env File
In the project root, create a file named:
```bash
.env
```
2️. Add the Following Variables
```bash
GROQ_API_KEY=your_groq_api_key_here
SCALEDOWN_API_KEY=your_scaledown_api_key_here
```
- Important Notes <br>
Never commit .env files to GitHub <br>
These keys are required for AI analysis and optional compression

### 5. Running the Backend Server
Start the Flask server with:
```bash
python backend/app.py
```
You should see output similar to:
```bash
Running on http://127.0.0.1:5000
```
This confirms the backend is running correctly.
