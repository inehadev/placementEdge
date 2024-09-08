"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {data:session , status} =useSession();
  return (
    <>
    <header className='flex flex-col sm:flex-row  justify-evenly sticky items-center bg-green-900 h-[70px] w-full text-white '>
      <div className='text-center mb-4 sm:mb-0'>
        <h1 className='  text-2xl sm:text-3xl font-normal font-style: italic text-center'>PlacementEdge</h1>
        </div>
      <div className=' flex flex-col sm:flex-row items-center'>
      <Link className='text-xl mb-2 sm:mb-0 sm:mr-4' href='/about'>About</Link>
        {!session ? (
          <Link className='text-xl mb-2 sm:mb-0' href='/sign-up'>Sign Up</Link>
        ) : (
          <div className='text-xl flex items-center'>
            <span>Welcome, {session.user?.name || 'User'}!</span>
            <Link className=' text-xl' href='/api/auth/signout'>Sign Out</Link>
          </div>
        )}
        
      </div>
    </header>
    </>
  )
}

export default Navbar
