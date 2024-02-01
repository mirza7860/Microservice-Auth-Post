import express from "express";
import Routes from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

// Intialize express app

const app = express();

// Configuration

dotenv.config();

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 6400;

app.get("/", (req, res) => {
  return res.json({ message: "It is working...." });
});

// Routes
app.use(Routes);

app.listen(PORT, (req, res) => {
  console.log(`Server Listening At Port ${PORT}`);
});
