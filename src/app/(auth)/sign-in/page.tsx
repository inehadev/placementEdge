

"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';


const Page = () => {
  const router = useRouter(); 
  const[userInfo , setInfo ]=useState({email:"" , password:""})
  const { data: session , status } = useSession();
  console.log('session',session);
  console.log('Session Status:', status);

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is authenticated, redirecting...");
      router.replace("/"); // Redirect to the desired page
    }
  }, [status, router]);
 

  const onSubmit=async(e:FormEvent)=>{
    e.preventDefault();
   try {
    const res= await signIn("credentials" , {
      email:userInfo.email,
      password:userInfo.password,
      redirect:false
      
    })
    console.log('Sign-in response:', res);

    if (status === "authenticated") {
      console.log("User is authenticated, redirecting...");
      router.replace("/"); // Redirect to the homepage or another secure page
    }
    else {
      console.error("Sign-in failed:", res?.error);
    }
   } catch (error) {
    console.error("Error during sign-in:", error);
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
    <div className=' flex justify-start  h-screen w-full gap-32 items-center  '>
    <div className='bg-green-950 w-[800px]  h-screen justify-center items-center'>
      <Link href={"/"}><h1 className='text-center text-white opacity-60 text-4xl mt-[7%]'>PLACEMENTEDGE</h1></Link>
    <Image src="/sign-up.png" alt="" className='ml-[7%]'  height={300} width={500} />

    </div>
      <div className='justify-center items-center'>
        <h1 className='text-4xl text-green-950'>Sign-In</h1>
        <p className='text-green-950 opacity-70 mt-1'>Login here to start your placement journey</p>

        <div className='mt-2'>
          <Label htmlFor="email" className='text-green-950'>Email</Label>
          <Input type="email" id="email" placeholder="Email" value={userInfo.email} onChange={handleInputChange}/>
        </div>

        <div className='mt-2'>
          <Label htmlFor="password" className='text-green-950'>Password</Label>
          <Input type="password" id="password" placeholder="Password"  value={userInfo.password} onChange={handleInputChange}/>
        </div>
        

        <Button className='w-full mt-5 bg-green-950 text-white  hover:bg-white hover:text-green-950 ' onClick={onSubmit} >Sign In</Button>

        <Button className='w-full mt-5 bg-green-950 text-white hover:bg-white hover:text-green-950' onClick={() => signIn("google")} ><FcGoogle size={20}/><p className='ml-4'>SignIn with Google</p></Button>

        <p className='mt-2 text-green-950'>
          Don't have an account? <Link href="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Page
