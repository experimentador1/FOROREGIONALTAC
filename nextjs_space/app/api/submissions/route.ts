import { NextResponse } from 'next/server';

// Las ponencias se reciben vía Google Form:
// https://forms.gle/BUCDyTQDxmBKUdLN9
export async function GET() {
  return NextResponse.json({ message: 'Las ponencias se reciben vía Google Form.' });
}

export async function POST() {
  return NextResponse.json(
    { error: 'Las ponencias se envían a través del formulario de Google: https://forms.gle/BUCDyTQDxmBKUdLN9' },
    { status: 410 }
  );
}
