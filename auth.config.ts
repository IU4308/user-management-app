import type { NextAuthConfig } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

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
        async authorized({ auth, request: { nextUrl, url, cookies } }) {
            console.log('AAAAAAAAAAAA',auth, 'AAAAAAAAAAa')
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
            return session;
        },
        async jwt({ token, user, trigger }) {
            if (user) {
                token.is_blocked = user.is_blocked;
                token.is_deleted = user.is_deleted;
            } else if (token.email) {
                const baseUrl =
                    // process.env.NEXT_PUBLIC_BASE_URL ||
                    // (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
                    process.env.VERCEL_URL
                console.log('Fetching user data from:', baseUrl);
                try {
                    const res = await fetch(`${baseUrl}/api/get-user`, {
                        method: 'POST',
                        body: JSON.stringify({ email: token.email }),
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token.sub}`,
                        },
                    });
    
                    if (res.ok) {
                        const contentType = res.headers.get('content-type');
                        if (contentType && contentType.includes('application/json')) {
                            const userDB = await res.json();
                            token.is_blocked = userDB.is_blocked;
                        } else {
                            const text = await res.text();
                            console.error('Unexpected response format:', text);
                            token.is_deleted = true;
                        }
                        // const userDB = await res.json();
                        // token.is_blocked = JSON.parse(userDB).is_blocked;
                      } else {
                        const errorData = await res.json();
                        console.error('Failed to fetch user data', res.statusText, errorData.message);
                        token.is_deleted = true;
                    }

                } catch (error) {
                    console.error('Error fetching user data:', error);
                    token.is_deleted = true;
                }
            }
            console.log('TTTTTTT', token, 'TTTTTTTTT')
            return token;
        },
    },
    providers: [],
} satisfies NextAuthConfig;