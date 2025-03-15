import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z as x } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', max: 10 });
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>` 
        SELECT * FROM users WHERE email=${email}
        `;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

async function markLogin(email: string): Promise<void> {
  try {
    await sql<User[]>` 
      UPDATE users
      SET last_login = ${Date.now()}
      WHERE email = ${email};
      `;
      // console.log('test4')
      
      // return user
  } catch(err) {
    console.log(err)
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
          console.time('authorize')
          const parsedCredentials = x
            .object({ email: x.string().email(), password: x.string() })
            .safeParse(credentials);
            
            if (parsedCredentials.success) {
              const { email, password } = parsedCredentials.data;
              console.time('fetching')
              const user = await getUser(email);
              console.timeEnd('fetching')
                if (!user) return null;
                // const passwordsMatch = password === user.password;
                const passwordsMatch = await bcrypt.compare(password, user.password);
                // console.log('test3')
                console.timeEnd('authorize');
                if (passwordsMatch) {
                    await markLogin(email)
                    return user
                };
            }
       
            return null;
        },
      }),
  ],
});