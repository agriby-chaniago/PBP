const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "hallo sayang" });
});

app.listen(5000, () => {
  console.log("Server is running on http://127.0.0.1:5000/api/data");
});
