import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z as x } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>` 
        SELECT name::text, email::text, password::text, created_at::timestamptz, is_blocked::boolean
        FROM users WHERE email=${email}
        `;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
          const parsedCredentials = x
            .object({ email: x.string().email(), password: x.string() })
            .safeParse(credentials);
            
            if (parsedCredentials.success) {
              const { email, password } = parsedCredentials.data;
              const user = await getUser(email);
                if (!user) return null;
                // const passwordsMatch = password === user.password;
                const passwordsMatch = await bcrypt.compare(password, user.password);
                if (passwordsMatch) {

                  try {
                    console.log('test')
                    await sql<User[]>` 
                      UPDATE users
                      SET last_login = ${Date.now()}
                      WHERE email = ${email};
                      `;
                      
                      return user
                  } catch(err) {
                    console.log(err)
                  }
                };
            }
       
            return null;
        },
      }),
  ],
});