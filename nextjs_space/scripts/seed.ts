import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('johndoe123', 10);

  await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  });

  await prisma.news.upsert({
    where: { id: 'news-initial-1' },
    update: {},
    create: {
      id: 'news-initial-1',
      title: 'Expositores del Panel Inaugural por confirmarse',
      excerpt: 'Próximamente se anunciarán los expertos que participarán en el panel inaugural "Voces plurales y TAC en la era de la IA: epistemologías y desafíos regionales".',
      content: 'El comité organizador del Foro Regional "Tecnologías del Aprendizaje con Inteligencia Artificial" se complace en informar que se encuentran en proceso de confirmación los tres expertos que participarán en el panel inaugural titulado "Voces plurales y TAC en la era de la IA: epistemologías y desafíos regionales". Los perfiles de los panelistas serán anunciados en las próximas semanas a través de este mismo sitio web y los canales oficiales de la UJAT. ¡Estén atentos!',
      imageUrl: '/images/encabezado.png',
      published: true,
    },
  });

  await prisma.news.upsert({
    where: { id: 'news-initial-2' },
    update: {},
    create: {
      id: 'news-initial-2',
      title: 'Convocatoria abierta para envío de ponencias',
      excerpt: 'Se invita a estudiantes, docentes e investigadores a enviar sus trabajos de investigación en los tres ejes temáticos del foro.',
      content: 'La División Académica de Ciencias y Tecnologías de la Información (DACyTI) de la UJAT invita a la comunidad académica regional a participar con ponencias arbitradas en el Foro Regional. Los trabajos deben estar alineados con alguno de los tres ejes temáticos: Analíticas del aprendizaje, Entornos educativos inteligentes, o Innovación pedagógica con IA. El proceso de dictaminación será doble ciego.',
      imageUrl: '/images/fondo-ppt.png',
      published: true,
    },
  });

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
