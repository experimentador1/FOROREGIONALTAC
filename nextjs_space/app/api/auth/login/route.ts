import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Panel administrativo no disponible en esta versión.' }, { status: 503 });
}
