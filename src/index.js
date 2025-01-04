import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("DevOps is awesome!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
