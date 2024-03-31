  'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'; 
import { useSession } from "next-auth/react"

function Profile() {
  const router = useRouter()
  const { data: session } = useSession()
  return (
    <div className='flex items-center justify-center bg-slate-500 h-screen w-screen'>
      <div>
      <h1 className='font-bold text-2xl text-white'>Hi you are on profile</h1>
      <p className='text-center text-amber-100 font-bold txt-2xl'>{session?.user?.name}</p>
      <p className='text-center text-purple-100  txt-2xl'>{session?.user?.email}</p>
        <button onClick={()=>{
            signOut({ redirect: false }).then(() => {
              router.push("/"); 
          });
        }} className='bg-red-500 text-cyan-50 ml-16 py-1 px-5 txt-2xl mt-4 :'>LogOut</button>
      </div>
    </div>
  )
}

export default Profile
