import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const apiKey = process.env.PDF_API;

export async function POST(request: Request) {
  console.log("Working...");
  const pdfPath = path.join(process.cwd(), 'public', 'verbal_ ability.pdf');
  console.log('Resolved PDF Path:', pdfPath);

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

    return NextResponse.json({
      status: 200,
      message: "PDF data is successfully extracted",
      response: response.data,
    });
  } catch (error) {
    console.error('Error extracting PDF data:', error);

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      return NextResponse.json({
        status: 500,
        message: 'Error extracting PDF data',
        error: error.response ? error.response.data : error.message,
      });
    } else if (error instanceof Error) {
      // Handle other errors
      return NextResponse.json({
        status: 500,
        message: 'An unexpected error occurred',
        error: error.message,
      });
    } else {
      // Handle unknown error types
      return NextResponse.json({
        status: 500,
        message: 'An unknown error occurred',
        error: 'Unknown error',
      });
    }
  }
}


// import fs from 'fs';
// import path from 'path';
// import pdfParse from 'pdf-parse';

// export async function POST(request:Request) {
  
//     // Specify the path of the PDF file
//     console.log("entered")
//     const pdfPath = path.join(process.cwd(), 'public', 'verbal_ability.pdf');
    
//     try {
//       // Read the PDF file
//       const dataBuffer = fs.readFileSync(pdfPath);
      
//       // Parse the PDF file
//       const pdfData = await pdfParse(dataBuffer);

//       // Respond with the text content of the PDF
//      return  Response.json({
//         status: 200,
//         text: pdfData.text,  // Parsed text from the PDF
//         meta: pdfData.info,   // Metadata from the PDF
//       });
//     } catch (error) {
//       console.error('Error extracting PDF data:', error);
     
//     }
//   }

