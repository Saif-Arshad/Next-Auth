// 'use client '
// import { signOut } from 'next-auth/react';

// function SignOutButton() {
//   const handleSignOut = async () => {
//     await signOut();
//   };

//   return (
//     <button
//       className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
//       onClick={handleSignOut}
//     >
//       Sign Out
//     </button>
//   );
// }

// function Page() {
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
//       <SignOutButton />
//     </div>
//   );
// }

// export default Page;

import React from 'react'

function page() {
  return (
    <div>
      <h1>Hi you are on profile</h1>
    </div>
  )
}

export default page
