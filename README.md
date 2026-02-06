# Code Documentation Navigator
Code Documentation Navigator is a simplified Retrieval-Augmented Generation (RAG) based web application that helps users understand and navigate code documentation by asking questions in natural language.The system retrieves relevant code or documentation context and uses a Large Language Model (LLM) to generate clear, human-readable explanations. This project is a scaled-down, learning-focused implementation designed to demonstrate core RAG concepts.

## ✨ Features
- Ask questions about a codebase or documentation
- Retrieves relevant code/documentation context
- Generates AI-powered explanations using an LLM
- Simple and clean web interface
- Beginner-friendly, scalable design
  
## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python
- AI / LLM: LLM API
- Concepts: Retrieval-Augmented Generation (RAG)

## ⚙️ How It Works
- Code documentation or source files are loaded as text.
- When a user asks a question, relevant parts of the documentation are retrieved.
- The retrieved context is combined with the user’s query.
- The combined prompt is sent to an LLM API.
- The LLM generates a clear explanation grounded in the retrieved context.
- The response is displayed on the web interface.

## 📦 Installation & Setup
1. Clone the repository:
git clone https://github.com/your-username/code-documentation-navigator.git
cd code-documentation-navigator
2. Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
3. Install dependencies:
pip install -r requirements.txt
4. Set up environment variables (if required):
export API_KEY=your_api_key_here

## ▶️ Running the Application
python app.py
- Then open your browser and navigate to:
http://localhost:5000

## 🎯 Why This Project?
Understanding large codebases can be challenging, especially for new developers. This project demonstrates how RAG and LLMs can make code documentation more accessible by providing contextual, conversational explanations.

## 🔮 Future Improvements
- Support for larger codebases
- Vector database integration for better retrieval
- File upload support
- Syntax highlighting for code snippets
- Advanced prompt optimization

## 🙌 Acknowledgements
- GENz AI Programme – for structured learning and guidance
  
