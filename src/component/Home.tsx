import React from 'react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-screen" style={{ backgroundImage: "url('/desktop.svg')" }} >
        <div className="flex justify-around">
        <div className="flex-grow flex flex-col gap-5 justify-center items-start ml-44">
            <p className="text-green-900 font-bold text-5xl  ml-10">
              Achieve Your Excellence <br />with PlacementEdge
            </p>
            <p className="text-green-800 font-light text-xl  ml-10 opacity-60 ">
              From aptitude tests to real-world projects, we <br /> 
              provide everything you need to succeed in the <br />
              competitive job market.
            </p>
            <div className='ml-10 mt-4 flex  border border-green-950 rounded-md w-[80%]' ><Input type='text'  placeholder='Ask your Placement doubt... ' className=' border-none focus:outline-none '/> <Search size={28} className='mt-1 mr-2'/></div>
          </div>
          <div className="flex justify-center items-center ">
            <img src="/student.png" alt="student" className="h-[570px] mr-14 " />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
