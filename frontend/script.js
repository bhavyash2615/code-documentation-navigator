/* async function sendCode() {
    const code = document.getElementById("code").value;
    const question = document.getElementById("question").value;

    const response = await fetch("http://127.0.0.1:5000/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, question })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.explanation;
} */

async function sendCode() {
    const code = document.getElementById("code").value;
    const question = document.getElementById("question").value;

    const response = await fetch("http://127.0.0.1:5000/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, question })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.explanation;
}
