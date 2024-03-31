'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'; 

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter(); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState("");
  
  const alerting = async (e:any) => {
    e.preventDefault();
    if (!name || !email || !password)
      setError("All Fields are required");
    try {
      const userExistResponse = await fetch('api/userexist', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const { userExists } = await userExistResponse.json();

      if (userExists) {
        setError("User Already Exists");
        return;
      }

      const res = await fetch("api/register", {
        method: 'POST',
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })

      })

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      }
      else {
        console.log("User Failed");

      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-800">
      <form onSubmit={alerting} className="bg-blue text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" className="block w-full mx-auto text-sm py-2 px-3 text-blue-950 rounded" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="saif@gmail.com" className="block my-3 w-full mx-auto text-sm text-blue-950  py-2 px-3 rounded" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="block w-full mx-auto text-sm py-2 px-3 text-blue-950  rounded my-3" />
        <button className="bg-blue text-white mb-3 font-bold py-2 px-4 rounded border block mx-auto w-full">
          Sign Up
        </button>
        {
          error ? <span className='bg-red-600 block w-fit py-1 px-4 rounded-md ml-8 '>{error}</span> : ""
        }
        <a href="/login" >Login</a>
      </form>
    </div>
  )
}
