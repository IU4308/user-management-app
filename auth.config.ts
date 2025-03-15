import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';
 
export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl, url } }) {
            if (nextUrl.pathname === '/') {
                return NextResponse.redirect(new URL('/login', url))
            }  
            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            if (isOnAdmin) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/admin', nextUrl));
            }
            return true;
            },
    },
    providers: [],
} satisfies NextAuthConfig;