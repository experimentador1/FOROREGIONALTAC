import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Carga de archivos no disponible. Utiliza el formulario de Google para enviar ponencias.' }, { status: 410 });
}
