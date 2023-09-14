import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const data = {
    "name": 'Stonks',
    "prices": [1.2, 1.9, 1.3, 2.0, 1.4]
  }
 
  return NextResponse.json({ data })
}