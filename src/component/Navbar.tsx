import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='flex justify-evenly sticky items-center h-[100px] bg-blue-600 text-white '>
      <div className='mr-12'><h1 className='  text-3xl font-normal font-style: italic text-center'>PlacementEdge</h1></div>
      <div className=' '>
        <Link className='ml-12 text-xl' href='/about'>About</Link>
        <Link className='ml-12 text-xl' href='/sign-up'>SignUp</Link>

        
      </div>
    </header>
    </>
  )
}

export default Navbar
