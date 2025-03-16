import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

declare module 'next-auth' {
    interface User {
        is_blocked?: boolean;
        is_deleted?: boolean;
    }
}

export const authConfig = {
    pages: {
        signIn: '/login',
        signOut: '/logout'
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl, url } }) {
            // console.log(process.env.VERCEL_URL)
            console.log('nextUrl: ', nextUrl.href)
            console.log('auth object: ', auth);
            const base = nextUrl.pathname
            const isBlocked = auth?.user?.is_blocked;
            const isDeleted = auth?.user?.is_deleted;
            const isAuthorized = !!auth?.user && !isBlocked && !isDeleted
            
            if (base === '/') {
                return NextResponse.redirect(new URL('/login', url))
            }  

            if (base === '/register' && isDeleted) {
                return true
            }

            if (base === '/admin') {
                return isAuthorized ? true : false
            } else if (isAuthorized && (base === '/login' || base === '/register')) {
                return  Response.redirect(new URL('/admin', nextUrl));
            }

            return true;
        },
        async session({ session, token }) {
            session.user.is_blocked = token.is_blocked as boolean
            session.user.is_deleted = token.is_deleted as boolean

            console.log('Session callback:', { session, token });
            
            if (!token.is_deleted && !token.is_blocked) {
                const baseUrl = process.env.VERCEL_URL
                // const baseUrl = 'http://localhost:3000';
                // console.log
                // const fullBaseUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;
                console.log('Fetching user data from:', baseUrl);
                
                try {
                    const res = await fetch(`https://${baseUrl}/api/get-user`, {
                        method: 'POST',
                        body: JSON.stringify({ email: token.email}),
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Authorization': `Bearer ${token.accessToken}`,
                        },
                    });
    
                    if (res.ok) {
                        const userDB = await res.json();
                        token.is_blocked = userDB.is_blocked;
                    } else {
                        console.error('Error fetching user data', res.statusText);
                        token.is_deleted = true;
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    token.is_deleted = true;
                }
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.is_blocked = user.is_blocked;
                token.is_deleted = user.is_deleted;
            } 

            console.log('JWT callback:', { token, user });

            return token;
        },
    },
    providers: [],
} satisfies NextAuthConfig;