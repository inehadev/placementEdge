"use client"
import {useChat} from "ai/react"
import { Button } from "@/components/ui/button"


const Page = () => {
    
    const {input , handleSubmit  , handleInputChange , messages , isLoading}=useChat();
      console.log(messages)
      console.log(input)
  return (
    <div>
        <div className="text-lg font-semibold">
         i am your assistant
        </div>
        <form className="ml-12" onSubmit={handleSubmit} >
            <p>user message</p>
            <textarea className="mt-12 w-full bg-slate-100" value={input} onChange={handleInputChange}/>
            <Button type="submit" className="bg-green-950 text-white">Send message</Button>
        </form>
    </div>
  )
}

export default Page
