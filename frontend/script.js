async function sendCode() {
    const code = document.getElementById("code").value;
    const question = document.getElementById("question").value;
    const output = document.getElementById("output");

    output.innerText = "Explaining code... ⏳";

    try {
        const response = await fetch("https://YOUR-RENDER-URL.onrender.com/explain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: code,
                question: question
            })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();
        output.innerText = data.explanation;

    } catch (error) {
        console.error(error);
        output.innerText = "❌ Error connecting to backend. Please try again.";
    }
}
