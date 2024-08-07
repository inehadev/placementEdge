import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Image src={'/Desktop - 1.png'} alt='img' layout='fill' objectFit='cover' />
      
    </div>
    
    </>
  )
}

export default Home
