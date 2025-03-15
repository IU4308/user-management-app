import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function fetchUsers() {
    try {
        const data = await sql<User>`
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