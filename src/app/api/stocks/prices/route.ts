import { getPriceHistory } from '@/logic/stocks'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const history = getPriceHistory(1);

	return NextResponse.json(history)
}