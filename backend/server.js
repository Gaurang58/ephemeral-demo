import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const COMMIT = process.env.GITHUB_SHA || "dev-local";

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!", commit: COMMIT, time: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));