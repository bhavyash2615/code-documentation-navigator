# API Reference

This document describes the backend API endpoints exposed by
**Code Documentation Navigator**, including request formats,
parameters, and response structures.

---

## Base URL

### Local Development
http://localhost:5000


### Production


https://code-documentation-navigator.onrender.com


---

## Authentication

This API does not require authentication from the client.
All sensitive credentials (LLM API keys, ScaleDown API keys)
are securely stored on the backend using environment variables.

---

## Content Type

All requests and responses use JSON.

Content-Type: application/json

---

## Endpoint: Analyze Code

### `POST /explain`

Analyzes source code and returns an AI-generated explanation
based on the user's question and selected programming language.

---

### Request Body

```json
{
  "code": "string",
  "question": "string",
  "language": "string",
  "use_compression": true
}
```
---

### Request Parameters
|     Field	     | Type	 |Required|                   Description                |
|----------------|-------|--------|----------------------------------------------|
|code	           |string |  Yes   |	Source code to be analyzed                   |
|question        |string |  No	  |Natural language question about the code      |
|language	       |string |  No  	|Programming language (default: python)        |
|use_compression |boolean|  No	  |Enables ScaleDown compression (default: false)|

---

### Supported Language Values
```bash
python
java
c
cpp
javascript
typescript
go
rust
```
---

### Example Request
```bash
curl -X POST https://code-documentation-navigator.onrender.com/explain \
  -H "Content-Type: application/json" \
  -d '{
    "code": "def add(a, b): return a + b",
    "question": "What does this function do?",
    "language": "python",
    "use_compression": false
  }'
```
---

### Example Response
```bash
{
  "explanation": "This function takes two parameters, adds them together, and returns the result..."
}
```
---

### Response Fields
|   Field   |	 Type  	|            Description             |
|-----------|---------|------------------------------------|
|explanation|	string	|AI-generated explanation of the code|

---

### Error Handling
Common Error Responses
400 Bad Request
Returned when required fields are missing or invalid.
```bash
{
  "error": "Code input cannot be empty"
}
```
500 Internal Server Error

Returned when the backend or AI service encounters an error.
```bash
{
  "error": "Unable to process the request"
}
```
---

### Compression Behavior (ScaleDown)
When use_compression is enabled:
- Code is compressed before being sent to the LLM
- Semantic meaning and structure are preserved
- Token usage is reduced
- Response quality remains high
- Compression is skipped for short inputs.

---

### Rate Limits
- There are no explicit rate limits enforced by the API.
- Limits may be applied by upstream AI providers.

---

### Versioning
- The API currently uses a single unversioned endpoint.
- Future versions may introduce versioned routes (e.g., /v1/explain).
