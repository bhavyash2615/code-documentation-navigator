from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import os

app = Flask(__name__)
CORS(app)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

@app.route("/explain", methods=["POST"])
def explain_code():
    data = request.json
    code = data.get("code", "")
    question = data.get("question", "Explain this code")

    prompt = f"""
You are an expert software documentation assistant.

Explain the following code clearly and simply.
Focus only on what is relevant to the user's question.

Code:
{code}

User Question:
{question}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant"
,
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.3
    )

    explanation = response.choices[0].message.content

    return jsonify({"explanation": explanation})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)