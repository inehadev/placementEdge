"use client";

import Navbar from "@/component/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Groq} from "groq-sdk"; 

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const Page = () => {
  const [question, setQuestion] = useState(""); 
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
 
  interface Message {
    role: "system" | "user"; 
    content: string; 
  }

  async function generateAnswer() {
    try {
      setLoading(true);

      
      const messages: Message[] = [
        {
          role: "system", 
          content: "You are a placement assistant. Provide guidance to the following student query."
        },
        {
          role: "user", 
          content: question
        }
      ];

      
      const response= await groq.chat.completions.create({
        messages: messages, 
        model: "llama3-8b-8192" 
      });

      
      const generatedText = response.choices?.[0]?.message?.content || "No response generated.";

     
      
      setAnswer(generatedText.replace(/\*/g, ''));
      setLoading(false);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Failed to generate an answer. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="text-white text-lg">Loading...</div>
        </div>
      )}

      <div className="flex-col min-h-screen">
        <div className="text-lg font-semibold text-center mt-5">
          <h2 className="text-3xl text-green-950">I am your Placement Assistant</h2>
        </div>
        <div className="m-5 font-normal flex justify-center items-center">
          <pre className="items-center mx-44 mb-24 text-wrap font-sans font-medium">
            {answer}
          </pre>
        </div>

        <div className="fixed bottom-0 left-0 right-0 mx-48 mb-5 flex">
          <textarea
            className="w-full border border-green-950 rounded-md px-5 py-1"
            value={question}
            placeholder="Ask your placement doubt..?"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-green-950 text-white ml-3 mt-2"
            onClick={generateAnswer}
          >
            Get Answer
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
