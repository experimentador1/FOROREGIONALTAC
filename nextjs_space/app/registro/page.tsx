import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RegistrationForm } from '@/components/forms/registration-form';

export const metadata = {
  title: 'Registro | Foro Regional TAC-IA',
  description: 'Regístrate como participante del Foro Regional sobre Tecnologías del Aprendizaje con IA',
};

export default function RegistroPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pb-16 bg-foro-cream dark:bg-gray-950">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Inscripción</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Registro de Participantes
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Completa el formulario para registrarte al Foro Regional. La participación es gratuita y virtual.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
