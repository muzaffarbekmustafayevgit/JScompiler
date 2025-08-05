
function runCode() {
    const code = document.getElementById("editor").value;
    const outputEl = document.getElementById("output");
    outputEl.textContent = ""; // Tozalash
  
    // console.log'ni ushlab olish
    const originalLog = console.log;
    console.log = function (...args) {
      outputEl.textContent += args.join(" ") + "\n";
    };
  
    try {
      // Kodni bajarish
      new Function(code)();
    } catch (err) {
      outputEl.textContent += "❌ Xatolik: " + err.message + "\n";
    }
  
    // console.log'ni qayta tiklash
    console.log = originalLog;
  }
  
  // script.js faylini yuklab olish
  function downloadCode() {
    const code = document.getElementById("editor").value;
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  