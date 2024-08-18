import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.PDF_API; 


export default async function handler(request:Request) {
  const pdfPath = path.join(process.cwd(), 'public', 'example.pdf');
  
  try {
 
    const fileData = fs.readFileSync(pdfPath);
    const base64Pdf = Buffer.from(fileData).toString('base64');

   
    const response = await axios.post(
      'https://api.pdf.co/v1/pdf/convert/to/json',
      {
        file: base64Pdf,
        pages: '1-', 
      },
      {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

  return Response.json({
    status:200,
    message:"pdf data is sucessfully extracted ",
    response
  })
  } catch (error) {
    console.error('Error extracting PDF data:', error);
 
  }
}
