"use client"

import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {data:session , status} =useSession();
  return (
    <>
    <header className='flex justify-evenly sticky items-center bg-green-900 h-[70px]  text-white '>
      <div className='mr-32'><h1 className='  text-3xl font-normal font-style: italic text-center'>PlacementEdge</h1></div>
      <div className=' flex ml-32'>
      <Link className='ml-24 text-xl' href='/about'>About</Link>
        {!session ? (
          <Link className='ml-12 text-xl' href='/sign-up'>Sign Up</Link>
        ) : (
          <div className='ml-12 text-xl flex'>
            <span>Welcome, {session.user?.name || 'User'}!</span>
            <Link className='ml-4 text-xl' href='/api/auth/signout'>Sign Out</Link>
          </div>
        )}
        
      </div>
    </header>
    </>
  )
}

export default Navbar
