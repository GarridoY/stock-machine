import { NextResponse } from 'next/server';
import { buyStock } from '@/logic/stocks';
import { badRequest } from '@/util/httpUtil';

export async function POST(request: Request,
	{ params }: { params: { stockId: string } }
) {
	const stockId = parseInt(params.stockId);
	if (isNaN(stockId)) { return badRequest("A number is required"); }

	const success = buyStock(stockId);
	if (success) {
		return NextResponse.json(success);
	} else {
		return NextResponse.json("Insufficient funds");
	}
}