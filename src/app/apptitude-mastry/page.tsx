"use client"
import Navbar from '@/component/Navbar'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                console.log("fine")
                const response = await fetch('/api/apptitude'); // Update this path to your API
                const data = await response.json();
                console.log(data)
                setImage(data.image); // Set base64 image data
            } catch (error) {
                console.error('Failed to fetch image:', error);
            }
        }

        fetchImage();
    }, []);

    return (
        <>
            <Navbar />
            <div className='w-full h-screen bg-gray-100 px-4 py-4 flex flex-col  items-center'>
                <div className=' max-w-4xl'>
                    <h1 className='text-green-950  text-center font-medium text-3xl'>Mastering Aptitude: Your Ultimate Preparation Guide</h1>
                    <h2 className='text-green-950 opacity-75 text-center font-medium text-lg mt-4'>Unlock Key Skills for Exams and Career Success</h2>
                    <p className='text-green-950 opacity-90 ml-[9%] font-medium text-md mt-4'>
                        Explore our in-depth guide to aptitude questions and answers, covering crucial areas 
                        such <br /> as    Quantitative Aptitude, Logical Reasoning, and Verbal Ability. Whether you’re a   student <br /> gearing   up for exams or a 
                        job seeker aiming to boost your problem-solving prowess, our <br /> guide is   tailored  to your needs. With detailed 
                        step-by-step instructions and a variety of  <br />sample questions,  you’ll  gain the confidence needed to excel in interviews and competitive <br />
                        exams. Equip yourself  with the  skills    to master aptitude challenges and pave the way to your success.
                    </p>
                {/* Screenshot Display */}
                <div className='mt-8 flex justify-center'>
                        {image ? (
                            <img src={image} alt="Aptitude Guide Screenshot" className='rounded-lg shadow-lg max-w-full h-auto' />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page
