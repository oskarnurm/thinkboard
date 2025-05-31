import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 40 notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "note created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "note updated successfully!" });
});

app.listen(5001, () => {
  console.log("server started on PORT: 5001");
});
