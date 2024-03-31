// import type { NextFetchEvent, NextRequest } from 'next/server';
// import { getSession } from 'next-auth/react';
// import { NextResponse } from 'next/server';

// export async function middleware(req: NextRequest, ev: NextFetchEvent) {
//   const requestForNextAuth = {
//     headers: {
//       cookie: req.headers.get('cookie'),
//     },
//   };
//   //@ts-ignore
//   const session = await getSession({ req: requestForNextAuth });

//   if (session) {
//     console.log(session);

//     // validate your session here

//     return NextResponse.next();
//   } else {
//     // the user is not logged in, redirect to the sign-in page
//     const signInPage = '/signup';
//     const signInUrl = new URL(signInPage, req.nextUrl.origin);
//     signInUrl.searchParams.append('callbackUrl', req.url);
//     return NextResponse.redirect(signInUrl);
//   }
// }
// pages/api/middleware.ts

import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    // If user is not authenticated, redirect to the login page
    res.writeHead(302, { Location: '/login' });
    res.end();
    return;
  }

  // If user is authenticated, allow access to /profile
  if (req.url === '/profile') {
    return {
      props: { session }, // Pass session to the profile page
    };
  }

  // For other routes, continue with the request
  return {
    props: {},
  };
}
