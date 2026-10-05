import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chatbot backend is running!");
});
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    console.log("User message:", message);

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: message,
    });

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      error: "Sorry, chatbot is temporarily unavailable.",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
}); 