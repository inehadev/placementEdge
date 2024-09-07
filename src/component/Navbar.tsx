"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {data:session , status} =useSession();
  return (
    <>
    <header className='flex flex-col sm:flex-row  justify-evenly sticky items-center bg-green-900 h-[70px] w-full text-white '>
      <div className='lg:mr-32  md:mr-28 sm:mr-2'><h1 className='  text-3xl font-normal font-style: italic text-center'>PlacementEdge</h1></div>
      <div className=' flex ml-32 md:ml-24 sm:ml-10'>
      <Link className='lg:ml-24 md:ml-20 sm:7 text-xl' href='/about'>About</Link>
        {!session ? (
          <Link className='lg:ml-12 md:9 sm:ml-5 text-xl' href='/sign-up'>Sign Up</Link>
        ) : (
          <div className='lg:ml-12 md:9 sm:5 text-xl flex'>
            <span>Welcome, {session.user?.name || 'User'}!</span>
            <Link className='lg:ml-4 md:2 sm:1 text-xl' href='/api/auth/signout'>Sign Out</Link>
          </div>
        )}
        
      </div>
    </header>
    </>
  )
}

export default Navbar
