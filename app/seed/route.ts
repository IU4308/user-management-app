import { db } from '@vercel/postgres';

const client = await db.connect();

export async function GET() {

    try {
        await client.sql`BEGIN`;
        
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        console.log(error)
        return Response.json({ error }, { status: 500 });
    }
}