# Troubleshooting

This document lists common issues users or developers may encounter
while using or running **Code Documentation Navigator**, along with
their possible solutions.

---

## ❌ Backend Not Responding

### Symptoms
- Analyze button keeps loading
- Error message: *Unable to connect to the server*

### Possible Causes
- Backend server is not running
- Incorrect backend URL in frontend
- Network connectivity issues

### Solutions
- Ensure the backend is running:
  ```bash
  python backend/app.py
  ```
- Verify the backend URL in script.js
- Check that the correct port (5000) is used for local development

---

## ❌ "Server Error" or 500 Error
### Symptoms
- Output shows a generic error message
- Backend logs show exceptions
### Possible Causes
- Missing or invalid API keys
- LLM service temporarily unavailable
- Invalid request payload
### Solutions
- Confirm environment variables are set correctly
- Restart the backend server
- Check backend logs for detailed errors

---

## ❌ No Output Displayed
### Symptoms
- Page loads but no explanation appears
- Output area remains unchanged
### Possible Causes
- Empty code input
- JavaScript errors
- Network request blocked
### Solutions
- Ensure code input is not empty
- Check browser console for JavaScript errors
- Disable browser extensions that block requests

---

## ❌ ScaleDown Compression Not Working
### Symptoms
- Large inputs take longer than expected
- Compression logs not visible
### Possible Causes
- Compression toggle disabled
- ScaleDown API key missing or invalid
- Code length below compression threshold
### Solutions
- Enable the compression option manually
- Verify SCALEDOWN_API_KEY is set
- Use larger code samples to test compression

---

## ❌ Netlify Deployment Fails
### Symptoms
- Build fails during deployment
- Errors related to Python or pip packages
### Possible Causes
- Backend dependencies included in frontend build
- Incorrect base directory settings
### Solutions
- Set Netlify Base directory to frontend
- Set Publish directory to 
- Remove any netlify.toml file
- Redeploy without cache

---

## ❌ Render Backend Deployment Issues
### Symptoms
- Backend deploys but API is unreachable
- Application crashes on startup
### Possible Causes
- Missing environment variables
- Incorrect start command
- Dependency installation failure
### Solutions
- Add all required environment variables in Render dashboard
- Use correct start command:
```bash
python backend/app.py
```
- Check Render logs for startup errors

---

## ❌ Slow Response Time
### Symptoms
- Analysis takes longer than expected
### Possible Causes
- Large code input
- Compression disabled
- External AI API latency
### Solutions
- Enable Smart Context Optimization
- Reduce input size
- Retry after some time

---

## 🧠 General Debugging Tips
- Always check backend logs first
- Use browser developer tools (Network + Console)
- Restart services after configuration changes
- Test locally before deploying
