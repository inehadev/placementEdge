"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { z } from "zod"
import { signupSchema } from '@/app/schema/signupSchema'
import { FormField, FormItem, FormLabel, FormControl, Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const Page = () => {

  const { toast } = useToast();
  const router=useRouter();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      password: "",
      email: ""
    }


  })

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const response = await axios.post('/api/sign-up', data)
      toast({
        title: "Success",
        description: response.data.message
      })
     router.replace('/sign-in')
       

    } catch (error) {
      console.error("signup errror", error)
      toast({
        title: "False",
        description: "SignUp Failed"
      })

    }

  }
  return (
    <>
      <div className=' flex justify-start  h-screen w-full gap-32 items-center  '>
        <div className=' '>
        <Image src="/sign-up.png" alt="" className="ml-10 mt-6 w-full"  height={300} width={400} />

        </div>
        <div className='justify-center items-center '>
          <h1 className='text-4xl text-green-950 font-medium'>Sign-Up</h1>
          <p className='text-green-950 opacity-70 mt-1'>Enroll here! to start your placement journey</p>
         
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-1 mt-2 '>
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="john" {...field} />
                    </FormControl>


                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@gmail.com" {...field} />
                    </FormControl>


                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-green-950'>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="pasword" {...field} />
                    </FormControl>


                  </FormItem>
                )}

              />
              </div>

              <div className=''><Button className='w-full  text-white bg-green-950 ' type='submit'>SignUp</Button></div>

              <p className='mt-2 text-green-950'>Already have an account? <a href='/sign-in'>SignIn</a></p>

            </form>
          </Form>






        </div>
      </div>

    </>
  )
}

export default Page
