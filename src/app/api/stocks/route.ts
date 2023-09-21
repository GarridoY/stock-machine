import { getStocks } from '@/logic/stocks'
import { NextResponse } from 'next/server'

export async function GET() {
	const stocks = getStocks();

	return NextResponse.json(stocks);
}