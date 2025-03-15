import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function fetchUsers() {
    try {
        const data = await sql<User>`
            SELECT id::text, name::text, email::text, password::text, created_at::timestamptz, is_blocked::boolean, last_login::timestamptz
            FROM users
            ORDER BY created_at
        `;
        const users = data.rows;
        return users;
    } catch (err) {
        console.log()
        console.error('Database Error:', err);
        throw new Error('Failed to fetch users.');
    }
}