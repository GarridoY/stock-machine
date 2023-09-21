import { NextResponse } from 'next/server';
import { buyStock } from '@/logic/stocks';

export async function POST(request: Request) {
	const url = new URL(request.url);
	const params = url.searchParams;

	const stockId = params.get("id");
	if (stockId == null) {
		return NextResponse.json(false);
	}

	const success = buyStock(parseInt(stockId));
	return NextResponse.json(success);
}