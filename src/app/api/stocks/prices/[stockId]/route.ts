import { getPriceHistory } from '@/logic/stocks'
import { badRequest } from '@/util/httpUtil';
import { NextResponse } from 'next/server'

export async function GET(request: Request,
	{ params }: { params: { stockId: string } }
) {
	const stockId = parseInt(params.stockId);
	if (isNaN(stockId)) { return badRequest("A number is required"); }

	const history = getPriceHistory(stockId);

	return NextResponse.json(history)
}