import { NextResponse } from 'next/server';
import { getUser } from '@/app/lib/data';

export const config = {
  runtime: 'nodejs',
};


export async function POST(request: Request) {
  const { email } = await request.json();
  
  try {
    const user = await getUser(email);
    return NextResponse.json(user);
    // eslint-disable-next-line
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user', message: error }, { status: 500 });
  }
}
