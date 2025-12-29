// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const client = new OpenAI({
//   apiKey: process.env.VITE_GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

// app.post("/api/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const completion = await client.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//     });

//     res.json({
//       reply: completion.choices[0].message.content,
//     });
//   } catch (err) {
//     console.error("Groq error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("Backend running on http://localhost:5000");
// });