# Architecture

This document describes the technical architecture of **Code Documentation Navigator**,
including system components, data flow, and key design decisions.

The application follows a clean **frontend–backend separation** with an AI-powered processing layer.

---
## System Overview

Code Documentation Navigator follows a layered architecture where each component
has a single, well-defined responsibility.

Below is a high-level logical layout of the system:
```bash
┌──────────────────────────────┐
│          Frontend            │
│  (HTML, CSS, JavaScript)     │
│                              │
│ • Code input                 │
│ • Question input             │
│ • Language selection         │
│ • Compression toggle         │
│ • Results display            │
└───────────────┬──────────────┘
                │ HTTP (JSON)
                ▼
┌──────────────────────────────┐
│           Backend             │
│        (Flask API)            │
│                              │
│ • Input validation            │
│ • Prompt construction         │
│ • Compression control         │
│ • API orchestration           │
└───────────────┬──────────────┘
                │
        Optional│ScaleDown
                ▼
┌──────────────────────────────┐
│      ScaleDown Engine         │
│                              │
│ • Context compression         │
│ • Token optimization          │
│ • Semantic preservation       │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│        AI / LLM Layer         │
│        (Groq API)             │
│                              │
│ • Code reasoning              │
│ • Language-aware analysis     │
│ • Structured explanation     │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│           Response            │
│                              │
│ • Explanation returned        │
│ • JSON payload                │
└───────────────┬──────────────┘
                │
                ▼
┌──────────────────────────────┐
│          Frontend UI          │
│                              │
│ • Renders explanation         │
│ • User-readable output        │
└──────────────────────────────┘
```

---

## 🧩 High-Level Overview

The system consists of three primary layers:

1. **Frontend (Client)**
2. **Backend (API Server)**
3. **AI & Optimization Services**

Each layer has a clearly defined responsibility to ensure scalability,
maintainability, and security.

---

## 🌐 Frontend Architecture

### Technology
- HTML
- CSS
- JavaScript

### Responsibilities
- Collect code input and user questions
- Allow language selection
- Enable or disable ScaleDown compression
- Send requests to the backend API
- Display AI-generated explanations

### Design Principles
- Stateless frontend
- Minimal business logic
- Backend-driven intelligence

### Deployment
- Hosted on **Netlify**
- Static asset delivery for fast load times
- Environment-agnostic frontend

---

## 🧠 Backend Architecture

### Technology
- Python
- Flask
- Flask-CORS

### Responsibilities
- Accept requests from the frontend
- Validate and preprocess input
- Apply optional code compression
- Construct AI prompts
- Communicate with the LLM
- Return structured responses

### API Design
- Single primary endpoint: `POST /explain`
- JSON-based request/response
- Language-agnostic interface

### Deployment
- Hosted on **Render**
- Backend runs independently of frontend
- Supports auto-scaling and redeployment

---

## ⚡ Smart Context Optimization Layer (ScaleDown)

### Purpose
Large code inputs can exceed token limits or slow down AI processing.
ScaleDown optimizes this by compressing code intelligently.

### How it Fits in the Flow
- Activated only if the user enables compression
- Runs **before** sending code to the LLM
- Preserves semantic meaning and structure

### Benefits
- Reduced token usage
- Faster inference
- Improved scalability
- Better resource efficiency

---

## 🤖 AI Processing Layer

### Model Provider
- Large Language Model (via Groq API)

### Prompt Strategy
- Language-aware prompts
- Question-adaptive explanations
- Structured response guidance

### Processing Steps
1. Receive preprocessed (optionally compressed) code
2. Inject language context
3. Adapt explanation to user question
4. Generate human-readable output

---

## 🔁 Request–Response Flow

Below is the complete request lifecycle:

1. User pastes code and enters a question
2. Frontend sends a POST request to `/explain`
3. Backend receives and validates input
4. ScaleDown compresses code (optional)
5. Prompt is constructed with context
6. LLM generates explanation
7. Backend returns response as JSON
8. Frontend renders explanation

This clear separation ensures reliability and debuggability.

---

## 🔐 Security Considerations

- API keys stored in environment variables
- No sensitive data exposed to frontend
- CORS configured explicitly
- Backend isolated from static frontend

---

## 📈 Scalability & Maintainability

### Scalability
- Stateless backend design
- Optional compression for large inputs
- Independent frontend and backend scaling

### Maintainability
- Clear module boundaries
- Minimal coupling between layers
- Easy addition of new languages or features

---

## 🧠 Design Rationale

Key architectural decisions were made to:

- Keep the frontend lightweight
- Centralize intelligence in the backend
- Reduce AI costs using ScaleDown
- Support future expansion without major refactors

---

## 🔮 Future Architecture Extensions

The current architecture supports future upgrades such as:
- File upload support
- Multi-file analysis
- Vector-based retrieval (RAG)
- User authentication
- Caching of frequent queries
