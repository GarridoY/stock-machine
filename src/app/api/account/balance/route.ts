import { NextResponse } from 'next/server'
import { fetchBalance } from '@/logic/stocks'

export async function GET() {
    const balance = fetchBalance();

    return NextResponse.json(balance);
}