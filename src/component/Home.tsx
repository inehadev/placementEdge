import React from 'react'
import Navbar from './Navbar'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'


const Home = () => {
  return (
    <>
     

      <section className="relative w-full h-screen bg-no-repeat bg-cover" style={{ backgroundImage: "url('/desktop.svg')" }}   >
        <div className="flex flex-col sm:flex-row items-center justify-between p-4">
        <div className="flex-grow flex flex-col gap-5 justify-center items-start lg:ml-24 md:ml-20 sm:ml-4">
            <p className="text-green-900 font-bold text-5xl  ml-10">
              Achieve Your Excellence <br />with PlacementEdge
            </p>
            <p className="text-green-950 font-medium text-xl  ml-10 opacity-65 ">
              From aptitude tests to real-world projects, we <br /> 
              provide everything you need to succeed in the <br />
              competitive job market.
            </p>
           <div className='ml-10 mt-12 flex  border border-green-950 rounded-md w-[80%]' ><Input type='text'  placeholder='Ask your Placement doubt... ' className=" outline-none border-none bg-transparent "/> <Link href={'/ai-response'}> <Search size={28} className='mt-1 mr-2'/></Link></div> 
          </div>
         
          <div className="flex justify-center items-center ">
            <img src="/student.png" alt="student" className="h-[570px] max-w-full  " />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
