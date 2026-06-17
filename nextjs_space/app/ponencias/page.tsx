import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BarChart3, Brain, Sparkles, ExternalLink, CheckCircle, Calendar, FileText, Mail } from 'lucide-react';

export const metadata = {
  title: 'Enviar Ponencia | Foro Regional TAC-IA',
  description: 'Envía tu ponencia al Foro Regional sobre Tecnologías del Aprendizaje con IA — UJAT DACyTI',
};

const axes = [
  {
    id: 1,
    icon: BarChart3,
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    title: 'Analíticas del aprendizaje desde perspectivas críticas y plurales',
  },
  {
    id: 2,
    icon: Brain,
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    title: 'Entornos educativos inteligentes con enfoque decolonial e inclusivo',
  },
  {
    id: 3,
    icon: Sparkles,
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    title: 'Innovación pedagógica con IA y voces emergentes',
  },
];

const requirements = [
  'Formato PDF (máximo 8 páginas sin incluir referencias)',
  'Tipografía Times New Roman 12pt, interlineado 1.5',
  'Estructura: título, resumen (máx. 250 palabras), palabras clave, introducción, desarrollo, conclusiones y referencias',
  'Citas y referencias en formato APA 7ª edición',
  'Indicar eje temático al que corresponde la ponencia',
  'Incluir nombre(s) completo(s), institución, grado académico y correo de contacto',
];

const dates = [
  { icon: FileText, label: 'Recepción de ponencias', date: 'Hasta el 25 de agosto de 2025', emphasis: true },
  { icon: CheckCircle, label: 'Notificación de resultados', date: '30 de septiembre de 2025', emphasis: false },
  { icon: Calendar, label: 'Evento virtual sincrónico', date: '28–29 de octubre de 2025', emphasis: false },
];

export default function PonenciasPage() {
  return (
    <main className="min-h-screen bg-foro-cream dark:bg-gray-950">
      <Navbar />

      {/* Hero de la página */}
      <div className="bg-white dark:bg-gray-900 border-b border-border/50">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="badge-pill bg-foro-pink/10 text-foro-pink mb-5">Convocatoria abierta</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Envío de Ponencias
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
            Comparte tu investigación o experiencia pedagógica con la comunidad académica
            de la región Sur-Sureste. Las ponencias reciben dictaminación por doble ciego.
          </p>

          {/* CTA principal — Google Form */}
          <a
            href="https://forms.gle/BUCDyTQDxmBKUdLN9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.03] cursor-pointer text-base"
          >
            <ExternalLink className="w-5 h-5" aria-hidden />
            Enviar mi ponencia (Google Form)
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Al enviar aceptas que tu trabajo pase por un proceso de revisión por doble ciego.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-16 space-y-14">

        {/* Fechas importantes */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-6">Fechas importantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dates.map(({ icon: Icon, label, date, emphasis }) => (
              <div
                key={label}
                className={`rounded-2xl p-6 border transition-all ${
                  emphasis
                    ? 'bg-foro-pink/5 border-foro-pink/30'
                    : 'bg-white dark:bg-gray-900 border-border/50 shadow-sm'
                }`}
              >
                <Icon className={`w-5 h-5 mb-3 ${emphasis ? 'text-foro-pink' : 'text-muted-foreground'}`} aria-hidden />
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">{label}</p>
                <p className={`font-display font-semibold text-base ${emphasis ? 'text-foro-pink' : 'text-foreground'}`}>
                  {date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ejes temáticos */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-6">Ejes temáticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {axes.map(({ id, icon: Icon, color, bg, title }) => (
              <div key={id} className={`${bg} rounded-2xl p-6 border border-border/30`}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${color}`} aria-hidden />
                  <span className="text-xs font-mono font-semibold text-muted-foreground">Eje {id}</span>
                </div>
                <p className="font-semibold text-sm leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-6">Requisitos de formato</h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-border/50 shadow-sm p-8">
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-foro-pink shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-muted-foreground leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto de dudas */}
        <section>
          <div className="bg-foro-pink/5 dark:bg-foro-pink/10 rounded-2xl border border-foro-pink/20 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Mail className="w-8 h-8 text-foro-pink shrink-0" aria-hidden />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">¿Tienes dudas sobre el proceso de envío?</h3>
              <p className="text-sm text-muted-foreground">
                Escríbenos a{' '}
                <a href="mailto:fororegionalcomie@ujat.mx" className="text-foro-pink hover:underline cursor-pointer">
                  fororegionalcomie@ujat.mx
                </a>{' '}
                o a{' '}
                <a href="mailto:arturo.corona@ujat.mx" className="text-foro-pink hover:underline cursor-pointer">
                  arturo.corona@ujat.mx
                </a>
              </p>
            </div>
            <a
              href="https://forms.gle/BUCDyTQDxmBKUdLN9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shrink-0 cursor-pointer text-sm"
            >
              <ExternalLink className="w-4 h-4" aria-hidden />
              Ir al formulario
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
