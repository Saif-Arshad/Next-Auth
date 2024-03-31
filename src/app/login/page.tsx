'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function page() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email,setemail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password,setpassword] = useState("");
      // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error,seterror] = useState("");

  const alerting = async (e:any)=>{
    e.preventDefault()
   if(!email || !password){
      seterror("All Fields are required")
      return;
    }
    try {
      const login=  await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
        if(login?.error){
          seterror("Invalid login")
          return
        }
        router.push('/profile')
      } catch (error) {
        console.log(error);
        
      }
  }
   
  return (
   <div className="flex w-screen h-screen justify-center items-center bg-slate-800">
    <form onSubmit={alerting} className="bg-blue text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="saif@gmail.com" className="block w-full my-3 mx-auto text-sm py-2 text-slate-800 px-3 rounded" />
      <input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" className="block w-full mx-auto text-sm py-2 text-slate-950 px-3 rounded my-3" />
      <button className="bg-blue text-white font-bold mb-3 py-2 px-4 rounded border block mx-auto w-full">
        Login
      </button>
      {
      error ? <span className='bg-red-600 block w-fit py-1 px-4 rounded-md ml-8 '>{error}</span> : ""
      }
      <a href="/signup" className='mt-4'>SignUp</a>
    </form>
  </div>
  )
}
