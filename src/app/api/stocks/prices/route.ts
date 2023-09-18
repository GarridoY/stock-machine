import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const stonks = {
    name: "stonks",
    prices: [1.2, 1.9, 1.3, 2.0, 1.4]
  }
  const stacks = {
    name: "stacks",
    prices: [57, 19, 30, 25, 40]
  }

  return NextResponse.json([stonks, stacks])
}