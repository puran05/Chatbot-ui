import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// endpoint to handle the chatbot message
// app.post("/api/chat", async (req, res) => {
//   const { message, conversation } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: "Message is required" });
//   }

//   try {
//     const messagesArray = conversation || [];
//     messagesArray.push({ role: "user", content: message });

//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: messagesArray,
//       max_tokens: 150,
//       temperature: 0.7,
//     });

//     console.log("OPENAI API Response:", response);

//     //accessing the message content
//     const botMessage = response.data.choices[0]?.message?.content?.trim();

//     if (!botMessage) {
//       throw new Error("Invalid bot response");
//     }

//     // Append the bot's response to the conversation
//     messagesArray.push({ role: "assistant", content: botMessage });

//     res.json({ message: botMessage, conversation: messagesArray });
//   } catch (error) {
//     console.error(
//       "Error in OpenAI API call:",
//       error.response ? error.response.data : error.message
//     );

//     res
//       .status(500)
//       .json({ error: "An error occured while processing your request" });
//   }
// });

app.post("/api/chat", async (req, res) => {
  const { message, conversation } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const messagesArray = conversation || [];
    messagesArray.push({ role: "user", content: message });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messagesArray,
      max_tokens: 150,
      temperature: 0.7,
    });

    // Log the raw response for debugging
    console.log("Full API Response:", JSON.stringify(response, null, 2));
    console.log("above me ");
    // Simplified check for choices
    const choice = response?.choices?.[0]?.message;
    if (!choice || !choice.content) {
      throw new Error("No valid choices or content in OpenAI response");
    }

    // Safely extract and process the bot's message
    const botMessage = choice.content.trim();
    messagesArray.push({ role: "assistant", content: botMessage });

    res.json({ message: botMessage, conversation: messagesArray });
  } catch (error) {
    console.error(
      "Error in OpenAI API call:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error:
        error.response?.data?.error?.message ||
        "An error occurred while processing your request",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
