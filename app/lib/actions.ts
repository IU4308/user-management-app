'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z as x } from "zod";
import bcrypt from 'bcrypt';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const UserSchema = x.object({
    name: x.string().nonempty({
        message: 'Name is required'
    }),
    email: x.string().email().nonempty({
        message: 'Email is required'
    }),
    password: x.string().min(1, {
        message: 'Password must be at least 1 character'
    }),
    passwordConfirm: x.string(),
}).refine(data => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
});


export type UserState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        passwordConfirm?: string[];
    };
    message?: string | null;
    formData: FormData
}

export async function createUser(prevState: UserState | undefined, formData: FormData) {
    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        passwordConfirm: formData.get('passwordConfirm')
    })

    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields.',
            formData: formData
        };
    }
    const { name, email, password } = validatedFields.data;
    console.time('hashing')
    const hashedPassword = await bcrypt.hash(password, 2)
    console.timeEnd('hashing')
    try {
        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
        `
    } catch (error) {
        console.log(error)
        // eslint-disable-next-line
        const message = (error as any).code === '23505' 
            ? 'User with this email already exists' : 'Something went wrong';
        return {
            message: message,
            formData: formData
        }
    }

    revalidatePath('/admin');
    redirect('/login')
}