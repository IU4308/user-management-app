import { NextResponse } from 'next/server';
import { getUser } from '@/app/lib/data';

export const config = {
    runtime: 'nodejs',
};

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const user = await getUser(email);
        return NextResponse.json(JSON.stringify(user));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch user', message: error }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ error: 'GET method not allowed' }, { status: 405 });
}
