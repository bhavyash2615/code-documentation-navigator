# 📘 Code Documentation Navigator 
Code Documentation Navigator is an AI-powered web application that transforms source code into clear, human-readable explanations. Developers can paste code, ask questions in natural language, and instantly receive structured insights — making learning, reviewing, and understanding code faster and easier.<br>
🔗 Live Demo: https://code-doc-navigator.netlify.app <br>
🔗 Backend API: Hosted on Render [https://code-documentation-navigator.onrender.com]

This documentation will guide and help you understand, set up, and use the application effectively.

---

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [Features](docs/features.md)
- [Architecture](docs/architecture.md)
- [API Reference](docs/api-reference.md)
- [Configuration](docs/configuration.md)
- [User Guide](docs/user-guide.md)
- [Contributing](docs/contributing.md)
- [Troubleshooting](docs/troubleshooting.md)

---

## Quick Link 
[Github Repository](https://github.com/bhavyash2615/code-documentation-navigator)

---

## ✨ Key Features
-🧠 AI-Powered Code Understanding<br>
Converts complex code logic into simple explanations with headings and examples.
-🌍 Multi-Language Support<br>
Works with Python, Java, C, C++, JavaScript, TypeScript, Go, Rust, and more.
-🗜 Smart Context Optimization (ScaleDown)<br>
Optional compression for large codebases to reduce token usage while preserving intent.
-⚡ Fast & Interactive UI<br>
Clean, responsive frontend built for both desktop and mobile screens.
-🔒 Secure Architecture<br>
API keys and AI logic stay safely on the backend.

---

## 🛠 Tech Stack
### Frontend
- HTML
- CSS
- JavaScript (Fetch API)
- Hosted on Netlify
### Backend
- Python
- Flask + Flask-CORS
- Hosted on Render
### AI & Optimization
- Groq LLM (LLaMA 3.1)
- ScaleDown API for token compression

---

## ⚙️ How It Works
1. Paste Code<br>
Add any function, class, or script from a supported language.
2. Ask a Question<br>
Ask about logic, purpose, flow, edge cases, or behavior.
3. (Optional) Optimize Context<br>
Enable ScaleDown to compress large code before analysis.
4. AI Analysis<br>
The backend builds a structured prompt and sends it to the LLM.
5. Clear Explanation<br>
You receive a readable, well-structured explanation instantly.

---

## 🗜 Smart Context Optimization (ScaleDown)
For large code snippets, users can enable ScaleDown compression, which:
- Reduces unnecessary tokens
- Preserves structure and intent
- Improves response speed
- Optimizes LLM usage
- Compression is off by default and fully user-controlled

---

## 📁 Project Structure
```bash
code-documentation-navigator/
│
├── backend/                         # Backend (Flask API)
│   ├── app.py                       # Main Flask application
│   ├── __init__.py                  # Backend package initializer
│   └── utils/                       # Backend utilities (if any)
│
├── frontend/                        # Frontend (Static Web App)
│   ├── index.html                   # Main HTML file
│   ├── style.css                    # Global styles
│   ├── script.js                    # Frontend logic & API calls
│   └── assets/                      # Icons, images (if added later)
│
├── docs/                            # Project documentation
│   ├── getting-started.md           # Installation & setup guide
│   ├── features.md                  # Feature overview
│   ├── architecture.md              # System architecture & design
│   ├── api-reference.md             # Backend API documentation
│   ├── configuration.md             # Environment & config settings
│   ├── user-guide.md                # End-user usage guide
│   ├── contributing.md              # Contribution guidelines
│   └── troubleshooting.md           # Common issues & fixes
│
├── requirements.txt                 # Python dependencies
├── .env.example                     # Sample environment variables
├── .gitignore                       # Git ignored files
├── README.md                        # Project overview
└── venv/                            # Python virtual environment (local)
```

---
