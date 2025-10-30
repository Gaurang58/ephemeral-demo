import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || "http://localhost:4000";

app.get("/", (_req, res) => {
  res.send(`
<!doctype html>
<html>
<head><meta charset="utf-8" /><title>Ephemeral Preview</title></head>
<body style="font-family: system-ui">
  <h1>Frontend</h1>
  <p><strong>API_URL</strong>: ${API_URL}</p>
  <pre id="out">Loading...</pre>
  <script>
    fetch("${API_URL}/api/hello").then(r => r.json()).then(d => {
      document.getElementById("out").textContent = JSON.stringify(d, null, 2);
    }).catch(e => { document.getElementById("out").textContent = e.toString(); });
  </script>
</body>
</html>`);
});

app.listen(PORT, () => console.log(`Frontend listening on ${PORT}`));