import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

declare module 'next-auth' {
    interface User {
        is_blocked?: boolean;
    }
}

export const authConfig = {
    pages: {
        signIn: '/login',
        signOut: '/logout'
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl, url } }) {
            const base = nextUrl.pathname
            if (base === '/') {
                return NextResponse.redirect(new URL('/login', url))
            }  
            const isAuthorized = !!auth?.user && !auth?.user?.is_blocked
            if (base === '/admin') {
                console.log(base, 'test')
                if (isAuthorized) return true;
                return false;
            } else if (isAuthorized && (base === '/login' || base === '/register')) {
                
                return  Response.redirect(new URL('/admin', nextUrl));
            }
            if (base === '/register') return true
            return true;
        },
        async session({ session, token }) {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000';
            const res = await fetch(`${baseUrl}/api/get-user`, {
                method: 'POST',
                body: JSON.stringify({ email: token.email}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                const userDB = await res.json();
                session.user.is_blocked = userDB.is_blocked;
            } else {
                console.error('Failed to fetch user data');
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.is_blocked = user.is_blocked;
            } 
            return token;
        },
    },
    providers: [],
} satisfies NextAuthConfig;