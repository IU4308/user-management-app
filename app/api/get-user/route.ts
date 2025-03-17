import { NextResponse } from 'next/server';
import { getUser } from '@/app/lib/data';

export const config = {
  runtime: 'nodejs',
};


export async function POST(request: Request) {
  console.log('API hit: /api/get-user');
  
  try {
    const { email } = await request.json();
    console.log('Fetching user for email:', email);

    const user = await getUser(email);
    return NextResponse.json(JSON.stringify(user), {
      // status: 200,
      // headers: {
      //   'Access-Control-Allow-Credentials': 'true',
      //   'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL || '*',
      // },
    });
  } catch (error) {
    console.error('Error fetching user in API:', error);
    return NextResponse.json({ error: 'Failed to fetch user', message: error }, { status: 500 });
  }
}
