import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';
 
export default NextAuth(authConfig).auth;

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === '/') {
//       return NextResponse.redirect(new URL('/login', request.url))
//     }
   
// }
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};