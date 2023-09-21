import { NextResponse } from 'next/server'
import { buyStock } from '@/logic/stocks';

export async function POST(request: Request) {
	const success = buyStock(1);
	return NextResponse.json(success);
}