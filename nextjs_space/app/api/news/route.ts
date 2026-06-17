import { NextResponse } from 'next/server';

// Noticias estáticas — no requieren base de datos.
// Para agregar noticias, edita este array directamente.
const STATIC_NEWS = [
  {
    id: '1',
    title: 'Convocatoria oficial abierta — Foro Regional TAC-IA 2025',
    excerpt: 'Se abre la convocatoria para el envío de ponencias y el registro de participantes al Foro Regional "Tecnologías del Aprendizaje con Inteligencia Artificial".',
    content: 'El comité organizador del Foro Regional TAC-IA anuncia la apertura oficial de la convocatoria para el evento que se realizará los días 28 y 29 de octubre de 2025 en modalidad virtual sincrónica. Invitamos a investigadores, docentes y estudiantes de la región Sur-Sureste a participar.',
    imageUrl: '/images/mapa-regional.png',
    published: true,
    createdAt: new Date('2025-06-01').toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(STATIC_NEWS);
}
