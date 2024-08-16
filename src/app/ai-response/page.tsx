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




// components/AskPlacementDoubt.tsx

// import { useState } from 'react';

// const AskPlacementDoubt: React.FC = () => {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/askPlacementDoubt', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ question })
//       });

//       if (!res.ok) {
//         throw new Error('Network response was not ok.');
//       }

//       const text = await res.text();
//       setResponse(text);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask your placement doubt here"
//           rows={4}
//           cols={50}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Submit'}
//         </button>
//       </form>
//       {response && <div><h3>Response:</h3><p>{response}</p></div>}
//     </div>
//   );
// };

// export default AskPlacementDoubt;

