// import OpenAI from "openai";
// import dotenv from "dotenv";

const { OpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openAiKey = process.env["OPENAI_API_KEY"];
console.log("openaikey", openAiKey);
const testKey = process.env["MY_KEY"];
console.log("testKey", testKey);

const openai = new OpenAI({
  apiKey: openAiKey,
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
      max_tokens: "3000",
    });

    console.log(completion.choices);
  } catch (error) {
    console.log("error", error);
  }
}

main();
