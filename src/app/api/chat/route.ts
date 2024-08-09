import {Configuration , OpenAIApi}from "openai-edge";
import {OpenAIStream , StreamingTextResponse}from 'ai';

export const runtime ='edge';

const config = new Configuration({
    apiKey:process.env.OPENAI_APIKEY

})

const openai = new OpenAIApi(config);
export async function POST(request:Request){
  const  {messages}= await request.json();

  const resposne = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream:true,
    messages:[
        {role:'system' ,content:"Your are a helpful assistant for student" },
        ...messages
    ]
  })

  const stream = await OpenAIStream(resposne);
  return new StreamingTextResponse(stream)
}