import { sql as sqlv } from '@vercel/postgres';
import { User } from './definitions';
import postgres from 'postgres';

export async function fetchUsers() {
    try {
        const data = await sqlv<User>`
            SELECT * FROM users
            ORDER BY created_at
        `;
        const users = data.rows;
        return users;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch users.');
    }
}

 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', max: 10 });
 
export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>` 
        SELECT * FROM users WHERE email=${email}
        `;
    return user[0];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user.');
  }
}

export async function markLogin(email: string): Promise<void> {
  try {
    await sql<User[]>` 
      UPDATE users
      SET last_login = ${Date.now()}
      WHERE email = ${email};
      `;
  } catch(err) {
    console.log(err)
  }
}