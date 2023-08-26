import dotenv from "dotenv";
dotenv.config("../.env");

import cors from "cors";
import express from "express";
import { connectDB } from "./utils/db.utils.js";
import movieRouter from "./routes/movie.js";
import userRouter from "./routes/user.js";
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/movies", movieRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
