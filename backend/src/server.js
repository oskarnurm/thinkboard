import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("server started on PORT: " + PORT);
});

// mongodb+srv://oskarnurm:thinkboard@cluster0.mat1k1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
