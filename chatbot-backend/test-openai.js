// test-openai.js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

(async () => {
  try {
    const response = await openai.models.list();
    console.log("Available Models:", response.data);
  } catch (error) {
    console.error("Error fetching models:", error.message);
  }
})();
