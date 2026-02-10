# Code Documentation Navigator
Code Documentation Navigator is a simplified Retrieval-Augmented Generation (RAG) based and AI-powered web application that helps users analyze, understand and navigate code documentation by asking questions in natural language.The system retrieves relevant code or documentation context and uses a Large Language Model (LLM) to generate clear, human-readable explanations - with optional smart context optimization using ScaleDown for large codebases. This project is a scaled-down, learning-focused implementation designed to demonstrate core RAG concepts.

## ✨ Features
- 🧠 AI-Powered Code Understanding
Ask questions about logic, purpose, flow, edge cases, or behavior.
- 🌐 Multi-Language Support
Works with Python, Java, C, C++, JavaScript, TypeScript, Go, Rust.
- ⚡ Smart Context Optimization (ScaleDown)
Optional compression for long code to reduce tokens while preserving structure and intent.
- 🎯 User-Controlled Compression
ScaleDown is off by default and can be enabled only when needed.
- 💡 Structured, Human-Readable Explanations
Responses include headings, clarity, and examples when helpful.
- 📱 Responsive & Modern UI
Works smoothly on desktop and mobile screens.
- More Interesting Features:
Simple and clean web interface and Beginner-friendly, scalable design
  
## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python, REST API architecture
- AI / LLM: Large Language Model(LLM) API and ScaleDown API for token-efficient context compression
- Concepts: Retrieval-Augmented Generation (RAG)

## ⚙️ How It Works
- Paste code in snippet any language into the editor
- When a user asks a question, relevant parts of the documentation are retrieved.
- The retrieved context is combined with the user’s query.
- (Optional) Enable ScaleDown compression for large inputs
- The combined prompt is sent to an LLM API.
- AI analyzes the code’s structure and intent and the LLM generates a clear explanation grounded in the retrieved context.
- The response is displayed on the web interface.

## 📦 Installation & Setup
1. Clone the repository:<br>
git clone https://github.com/your-username/code-documentation-navigator.git<br>
cd code-documentation-navigator
2. Create and activate a virtual environment:<br>
python -m venv venv<br>
source venv/bin/activate<br>   # On Windows: venv\Scripts\activate
3. Install dependencies:<br>
pip install -r requirements.txt
4. Set up environment variables (if required):<br>
SCALEDOWN_API_KEY=your_scaledown_api_key<br>
LLM_API_KEY=your_llm_api_key

## ▶️ Running the Application
python app.py
- Then open your browser and navigate to:<br>
http://localhost:5000

## 🌍 Live Demo
🔗 Live Website:
https://code-doc-navigator.netlify.app/

## 🎯 Why This Project?
Understanding large codebases can be challenging, especially for new developers. This project demonstrates how RAG and LLMs can make code documentation more accessible by providing contextual, conversational explanations.

## 🔮 Future Improvements
- Vector database integration for better retrieval
- File upload support
- Syntax highlighting for code snippets
- Advanced prompt optimization
- Syntax highlighting
- Export explanations as Markdown / PDF
- Dark mode

## 🙌 Acknowledgements
- GENz AI Programme – for structured learning and guidance
- ScaleDown AI — for context optimization tooling
- Open-source AI ecosystem
