import { NextResponse } from 'next/server';
import Database from '@database';

export async function GET(request, { params }) {
    const id = params.id;
    const data = await Database.getById(id);

    return NextResponse.json({ data });
}

