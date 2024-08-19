// 


"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/component/Navbar';

const Page = () => {
  const [pdfText, setPdfText] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPdfData() {
      try {
        const response = await fetch('/api/apptitude', { method: 'POST' });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPdfText(data.text);  // Set extracted PDF text
      } catch (error) {
        console.error('Failed to fetch PDF data:', error);
      }
    }

    fetchPdfData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-100 px-4 py-4 flex flex-col items-center">
        <div className="max-w-4xl">
          <h1 className="text-green-950 text-center font-medium text-3xl">Mastering Aptitude: Your Ultimate Preparation Guide</h1>
          <h2 className="text-green-950 opacity-75 text-center font-medium text-lg mt-4">Unlock Key Skills for Exams and Career Success</h2>
          <p className="text-green-950 opacity-90 ml-[9%] font-medium text-md mt-4">
            {pdfText ? pdfText : 'Loading PDF content...'}
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
