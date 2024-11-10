import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//endpoint to handle the chatbot message
app.post("/api/chat", async (req, res) => {
  const { message, conversation } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const messagesArray = conversation || [];
    messagesArray.push({ role: "user", content: message });

    const response = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: messagesArray,
      max_tokens: 150,
      temperature: 0.7,
    });

    const botMessage = response.data.choices[0].message.content.trim();

    // Append the bot's response to the conversation
    messagesArray.push({ role: "assistant", content: botMessage });

    res.json({ message: botMessage, conversation: messagesArray });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occured while processing your request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
