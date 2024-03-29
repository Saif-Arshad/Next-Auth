import React from 'react'

export default function page() {
  return (
   <div className="flex w-screen h-screen justify-center items-center bg-slate-800">
    <form className="bg-blue text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <input type="text" placeholder="Username" className="block w-full mx-auto text-sm py-2 px-3 rounded" />
        <input type="email" placeholder="saif@gmail.com" className="block w-full my-3 mx-auto text-sm py-2 px-3 rounded" />
      <input type="text" placeholder="Password" className="block w-full mx-auto text-sm py-2 px-3 rounded my-3" />
      <button className="bg-blue text-white font-bold mb-3 py-2 px-4 rounded border block mx-auto w-full">
        Login
      </button>
      <a href="/signup" className='mt-4'>SignUp</a>
    </form>
  </div>
  )
}
