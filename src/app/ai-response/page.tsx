"use client"

import Navbar from "@/component/Navbar";
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useState } from "react";



const Page = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  const [loading, setloading] = useState(false);


  // async function generateAnswer() {
  //   try {
  //     setloading(true);
  //     const response = await axios({
  //       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API}`, 
  //       data: {
  //         contents: [{ parts: [{ text: question }] }]
  //       }
  //     });
  //     console.log("API data:", response.data);


  //     const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

  //     setAnswer(generatedText);
  //     setloading(false);
  //   } catch (error) {
  //     console.error("Error generating answer:", error);
  //     setAnswer("Failed to generate an answer. Please try again.");
  //   }
  // }


  async function generateAnswer() {
    try {
      setloading(true);
  
      // Make API call to Gemini
      const response = await axios({
        method: 'post',
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API}`,
        data: {
          contents: [{
            parts: [{
              // Your prompt here
              text: `You are a placement assistant. Provide guidance to the following student query: ${question}`
            }]
          }]
        }
      });
  
      console.log("API data:", response.data);
  
   
      let generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    
      generatedText = generatedText.replace(/\*/g, '');
      setAnswer(generatedText);
      setloading(false);
  
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Failed to generate an answer. Please try again.");
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

      <div className="flex-col min-h-screen   ">
        <div className="text-lg font-semibold text-center mt-5 ">
          <h2 className="text-3xl text-green-950">  I am your Placement Assistant</h2>
        </div>
        <div className="m-5 font-normal flex justify-center items-center "><pre className=" items-center mx-44  mb-24 text-wrap font-sans font-medium">{answer}</pre></div>


        <div className="fixed bottom-0 left-0 right-0 mx-48 mb-5 flex ">
          <textarea className="w-full border border-green-950 rounded-md  px-5 py-1 " value={question} placeholder="ask your placement doubt..?" onChange={(e) => { setQuestion(e.target.value) }} />
          <Button type="submit" className="bg-green-950 text-white ml-3 mt-2" onClick={generateAnswer}>Get answer</Button></div>



      </div>

    </>


  )
}

export default Page

