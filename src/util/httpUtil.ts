import { NextResponse } from 'next/server';

export function badRequest(message: string) {
    return NextResponse.json(
        {"message": message}, 
        {"status": 400}
    )
}