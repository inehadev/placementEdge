import React from 'react'
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Target } from 'lucide-react';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

const DevelopmentDrive = () => {
    return (
        <>
            <div>
                <h1 className='text-4xl text-start mt-4  ml-[8%] text-green-950 font-semibold'>Success Framework</h1>
                <h6 className='text-lg text-green-950 text-start font-medium ml-[8%] opacity-60 mt-3'>Develop crucial skills in Aptitude, Projects, and DSA to build a strong foundation for  <br />
                    successful placements and career growth.🎓</h6>
            </div>

            <div className='flex  justify-center gap-14 mt-10 ml-10 mb-10' >

                <div className='h-[300px] w-[350px] bg-green-900 justify-center text-start  items-center rounded-md'>
                    <GraduationCap className=' text-white opacity-55 ml-[80%]  mt-3' size={30} />
                    <h1 className='text-2xl text-white mt-14 ml-7 opacity-80 font-medium '>DSA Essentials</h1>
                    <p className='text-white opacity-60 m-3 ml-7 font-medium'>Master Data Structures and Algorithms <br /> to crack coding interviews with confidence.</p>
                    <Link href={"/ai-response"}>     <Button className='ml-7 bg-white opacity-55 text-green-950  hover:bg-white hover:text-green-950 text-md'>Get Started <ArrowRight className='ml-1' size={20} /></Button></Link>

                </div>

                <div className='h-[300px] w-[350px] bg-green-900 justify-center text-start  items-center rounded-md'>
                    <Target className=' text-white opacity-55 ml-[80%]  mt-3' size={30} />
                    <h1 className='text-2xl text-white mt-14 ml-7 opacity-80 font-medium '>Aptitude Mastery</h1>
                    <p className='text-white opacity-60 m-3 ml-7 font-medium'>Enhance your logical reasoning and  <br />  problem-solving abilities to excel in placement tests.</p>
                  <Link href={"/ai-response"}>  <Button className='ml-7 bg-white opacity-55 text-green-950  hover:bg-white hover:text-green-950 text-md'>Get Started <ArrowRight className='ml-1' size={20} /></Button></Link>

                </div>

                <div className='h-[300px] w-[350px] bg-green-900 justify-center text-start  items-center rounded-md'>
                    <Rocket className=' text-white opacity-55 ml-[80%]  mt-3' size={30} />
                    <h1 className='text-2xl text-white mt-14 ml-7 opacity-80 font-medium '>Project Hub</h1>
                    <p className='text-white opacity-60 m-3 ml-7 font-medium'>Build real-world projects to showcase <br /> your  skills and stand out confidently in interviews.</p>
                    <Link href={"/ai-response"}>  <Button className='ml-7 bg-white opacity-55 text-green-950  hover:bg-white hover:text-green-950 text-md '  >Get Started <ArrowRight className='ml-1' size={20} /></Button></Link>

                </div>


            </div>
        </>
    )
}

export default DevelopmentDrive
