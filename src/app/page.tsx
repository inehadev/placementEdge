import DevelopmentDrive from '@/component/DevelopmentDrive'
import Footer from '@/component/Footer'
import Home from '@/component/Home'
import Navbar from '@/component/Navbar'
import React from 'react'

const page = () => {
  return (
 
      <>
       <main className='flex-grow flex flex-col item-center  items-center justify-center '>
       
       <Navbar />
      <Home/>
      <DevelopmentDrive/>
      </main>
      <Footer/>
      </>
   
  )
}

export default page
