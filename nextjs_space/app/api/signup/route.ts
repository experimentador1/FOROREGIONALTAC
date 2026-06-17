import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Registro de administradores no disponible.' }, { status: 503 });
}
