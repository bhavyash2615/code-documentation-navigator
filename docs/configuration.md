# Configuration

This document describes the configuration options required to run
**Code Documentation Navigator** in both local and production environments.

Configuration is managed using **environment variables** to ensure
security and flexibility across deployments.

---

## 🔐 Environment Variables

The backend requires the following environment variables to function correctly.

### Required Variables

| Variable Name | Description |
|---------------|-------------|
| `GROQ_API_KEY` | API key used to access the Large Language Model |
| `SCALEDOWN_API_KEY` | API key used for optional context compression |

---

### 📁 Configuration File (.env)

For local development, create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
SCALEDOWN_API_KEY=your_scaledown_api_key_here
```
**Do not commit the .env file to version control.**

---

### 🖥️ Local Development Configuration
**Backend**
- Reads environment variables from .env
- Runs on http://localhost:5000
- Debug mode disabled by default
**Frontend**
- Uses a hardcoded backend URL during development
- Can be updated in script.js if needed

---

### ☁️ Production Configuration
**Backend (Render)**
- Environment variables are configured in the Render dashboard
- Backend URL is exposed publicly
- Auto-redeploy triggered on GitHub updates
**Frontend (Netlify)**
- No environment variables required
- Only static files are deployed
- Backend API URL points to Render deployment

---

### 🔁 Switching Between Environments
To switch between local and production environments:
- Update backend API URL in script.js
- Restart the backend server
- Ensure correct environment variables are set

---

### ⚙️ Optional Configuration Parameters
Some internal parameters can be adjusted directly in the backend code:
- ScaleDown compression ratio
- Maximum token limits
- LLM temperature and model choice
- These parameters are intentionally kept internal to prevent misuse.

---

### 🔒 Security Best Practices
- Never expose API keys in frontend code
- Use environment variables for all secrets
- Avoid logging sensitive values
- Restrict API access to backend only
