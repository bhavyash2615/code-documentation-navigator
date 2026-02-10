async function sendCode() {
    const code = document.getElementById("code").value;
    const question = document.getElementById("question").value;
    const output = document.getElementById("output");
    const analyzeBtn = document.querySelector("button");
    const useCompression = document.getElementById("useCompression")?.checked || false;

    if (!code.trim()) {
        alert("Please enter some code first.");
        return;
    }

    output.innerText = "Analyzing code, please wait... ⏳";
    analyzeBtn.disabled = true;
    analyzeBtn.innerText = "Analyzing...";

    try {
        const response = await fetch("https://code-documentation-navigator.onrender.com/explain", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code,
                question,
                use_compression: useCompression
            })
        });

        if (!response.ok) throw new Error("Server error");

        const data = await response.json();
        output.innerText = data.explanation;

    } catch (error) {
        output.innerText =
            "❌ Unable to connect to the server.\nPlease check your internet connection or try again later.";
    } finally {
        analyzeBtn.disabled = false;
        analyzeBtn.innerText = "Analyze Code";
    }
}


function copyOutput() {
    const output = document.getElementById("output").innerText;

    if (!output || output.includes("will appear")) {
        alert("Nothing to copy yet!");
        return;
    }

    navigator.clipboard.writeText(output)
        .then(() => {
            alert("✅ Explanation copied to clipboard!");
        })
        .catch(() => {
            alert("❌ Failed to copy text.");
        });
}

function clearAll() {
    document.getElementById("code").value = "";
    document.getElementById("question").value = "";
    document.getElementById("output").innerText = "The explanation will appear here...";
} 
