"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'

const Page = () => {
  
  const {data:session}=useSession();
  console.log(session)

  return (
    <>
    <div className=' flex justify-start bg-blue-600  h-screen w-full gap-32 items-center  '>
     <div className=' '>
     <Image src="/sign-up.png" alt="" className="ml-10 mt-6 "  height={200} width={500} />
     </div>
     <div className='justify-center items-center '>
   <h1 className='text-4xl text-white'>Sign-In</h1>
   <p className='text-white opacity-70 mt-1'>Login here! to start your placement journey</p>

   

   <div className='mt-2'>
   <Label htmlFor="email" className='text-white '>Email</Label>
   <Input type="email" id="email" placeholder="Email" />
   </div>
   

   <div className='mt-2'>
   <Label htmlFor="password" className='text-white '>Password</Label>
   <Input type="password" id="email" placeholder="Password" />
   </div>


   <Button className='w-full mt-5 ' onClick={()=>signIn("google")}>SignIn</Button>

   <p className='mt-2'>   Don't have an account? <a href='/sign-up'>SignUp</a> </p>




     </div>
    </div>
    </>
  )
}

export default Page
