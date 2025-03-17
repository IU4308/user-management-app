import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z as x } from 'zod';
import bcrypt from 'bcrypt';
import { getUser, markLogin } from './app/lib/data';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
              async authorize(credentials) {
                  console.log('test')
                  const parsedCredentials = x
                      .object({ email: x.string().email(), password: x.string() })
                      .safeParse(credentials);
                    
                  if (parsedCredentials.success) {
                      const { email, password } = parsedCredentials.data;
                      const user = await getUser(email);
                      if (!user) return null;
                      const passwordsMatch = await bcrypt.compare(password, user.password);

                  if (user.is_blocked === true) {
                      throw new Error();
                  }

                  if (passwordsMatch) {
                      await markLogin(email)
                      return { ...user, is_blocked: user.is_blocked, is_deleted: false }
                  };
                  }
                  return null;
              },
          }),
    ],
});