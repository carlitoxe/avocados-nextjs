import { NextResponse } from 'next/server';
import Database from '@database';

async function GET() {
    const data = await Database.getAll();
    const length = data.length
    return NextResponse.json({ data, length  });
}

export { GET }