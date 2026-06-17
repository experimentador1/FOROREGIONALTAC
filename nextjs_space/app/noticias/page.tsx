import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsList } from '@/components/news-list';

export const metadata = {
  title: 'Noticias | Foro Regional TAC-IA',
  description: 'Noticias y actualizaciones del Foro Regional sobre Tecnologías del Aprendizaje con IA',
};

export default function NoticiasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pb-16 bg-foro-cream dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Novedades</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">Noticias y Actualizaciones</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Mantente al día con las últimas novedades del foro.</p>
          </div>
          <NewsList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
