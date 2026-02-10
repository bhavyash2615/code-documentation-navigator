from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from scaledown import ScaleDown
import os

scaledown = ScaleDown()

app = Flask(__name__)
CORS(app)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

LANGUAGE_CONTEXT = {
    "python": "Python",
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "java": "Java",
    "c": "C",
    "cpp": "C++",
    "go": "Go",
    "rust": "Rust"
}



@app.route("/explain", methods=["POST"])
def explain_code():
    data = request.json

    code = data.get("code", "")
    question = data.get("question", "")
    use_compression = data.get("use_compression", False)

    language_key = data.get("language", "python")
    language_name = LANGUAGE_CONTEXT.get(language_key, "Python")

    # Decide which code to send to LLM
    final_code = code

    if use_compression:
        compressed_code = scaledown.compress(
            text=code,
            max_tokens=800,
            target_ratio=0.4
        )

        print("Original length:", len(code))
        print("Compressed length:", len(compressed_code))

        final_code = compressed_code

    prompt = f"""
You are an expert software engineer and an expert {language_name} developer.

Analyze the following {language_name} code.
Explain it clearly and in a structured way when helpful.
Adapt your explanation to the user's question.

Code:
{final_code}

User Question:
{question}

Explain clearly with headings and examples if useful.
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
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