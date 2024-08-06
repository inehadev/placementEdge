

"use client"
import React, { FormEvent, FormEventHandler, useState } from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/router'

const Page = () => {

  const[userInfo , setInfo ]=useState({email:"" , password:""})
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter(); 

  const onSubmit=async(e:FormEvent)=>{
    e.preventDefault();
    const res= await signIn("credentials" , {
      email:userInfo.email,
      password:userInfo.password,
      redirect:false
    })
    console.log(res);
    if (res?.ok) {
      router.push('/'); 
    }
  

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInfo(prevState => ({
      ...prevState,
      [id]: value
    }));
  }


  return (
    <div className='flex justify-start bg-blue-600 h-screen w-full gap-32 items-center'>
      <div>
        <Image src="/sign-up.png" alt="Sign Up Image" className="ml-10 mt-6" height={200} width={500} />
      </div>
      <div className='justify-center items-center'>
        <h1 className='text-4xl text-white'>Sign-In</h1>
        <p className='text-white opacity-70 mt-1'>Login here to start your placement journey</p>

        <div className='mt-2'>
          <Label htmlFor="email" className='text-white'>Email</Label>
          <Input type="email" id="email" placeholder="Email" value={userInfo.email} onChange={handleInputChange}/>
        </div>

        <div className='mt-2'>
          <Label htmlFor="password" className='text-white'>Password</Label>
          <Input type="password" id="password" placeholder="Password"  value={userInfo.password} onChange={handleInputChange}/>
        </div>
        

        <Button className='w-full mt-5 ' onClick={onSubmit} >Sign In</Button>

        <Button className='w-full mt-5' onClick={() => signIn("google")} ><FcGoogle size={20}/><p className='ml-4'>SignIn with google</p></Button>

        <p className='mt-2'>
          Don't have an account? <Link href="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Page
