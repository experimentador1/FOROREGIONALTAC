import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TEMPLATE_PONENCIA } from '@/lib/forms';
import {
  BarChart3, Brain, Sparkles,
  ExternalLink, CheckCircle, Calendar,
  FileText, Mail, Download, ArrowRight, BookOpen,
} from 'lucide-react';

export const metadata = {
  title: 'Envío de Ponencias | Foro Regional TAC-IA',
  description: 'Envía tu ponencia al Foro Regional TAC-IA. Descarga la plantilla de formato, redacta tu trabajo y envíalo a la mesa temática correspondiente.',
};

const mesas = [
  {
    id: 1,
    number: 'Mesa 1',
    name: 'Analíticas con equidad: más allá del algoritmo',
    eje: 'Eje 1: Analíticas del aprendizaje desde perspectivas críticas y plurales',
    icon: BarChart3,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    borderColor: 'border-t-rose-500',
    topics: [
      'Minería de datos educativos',
      'Tableros e indicadores de aprendizaje',
      'Evaluación adaptativa',
      'Modelos predictivos en educación',
      'Sesgos algorítmicos y equidad',
      'Voces de comunidades rurales, indígenas o neurodivergentes',
    ],
  },
  {
    id: 2,
    number: 'Mesa 2',
    name: 'Inteligencia artificial con saberes situados',
    eje: 'Eje 2: Entornos educativos inteligentes con enfoque decolonial e inclusivo',
    icon: Brain,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    borderColor: 'border-t-amber-500',
    topics: [
      'Entornos virtuales de aprendizaje con IA',
      'Lenguas indígenas y tecnología educativa',
      'Saberes locales y decolonialidad digital',
      'Inclusión y accesibilidad en plataformas',
      'IA para contextos rurales y comunitarios',
    ],
  },
  {
    id: 3,
    number: 'Mesa 3',
    name: 'Pedagogías posibles en la era de la IA',
    eje: 'Eje 3: Innovación pedagógica con IA y voces emergentes',
    icon: Sparkles,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    borderColor: 'border-t-violet-500',
    topics: [
      'IA generativa en el aula',
      'Diseño instruccional con inteligencia artificial',
      'Experiencias pedagógicas innovadoras',
      'Formación docente en competencias digitales',
      'Investigaciones emergentes de estudiantes con IA',
    ],
  },
];

const requirements = [
  'Usar obligatoriamente la plantilla de formato provista (estilo Springer)',
  'Extensión máxima: 8 páginas sin incluir referencias',
  'Resumen en español e inglés (máx. 250 palabras cada uno)',
  'Palabras clave: de 3 a 5 términos',
  'Citas y referencias en formato APA 7ª edición',
  'Indicar claramente la mesa temática a la que se postula',
  'Incluir nombre(s), institución, grado académico y correo de contacto',
];

const dates = [
  { icon: FileText,    label: 'Recepción de ponencias',    date: '20 de septiembre de 2026',    emphasis: true },
  { icon: CheckCircle, label: 'Notificación de resultados', date: '30 de septiembre de 2026', emphasis: false },
  { icon: Calendar,    label: 'Evento virtual sincrónico',  date: '15 de octubre de 2026',   emphasis: false },
];

const steps = [
  {
    num: '1',
    icon: Download,
    title: 'Descarga la plantilla',
    desc: 'Utiliza la plantilla oficial en formato Springer para redactar tu ponencia. Asegúrate de seguir el formato indicado.',
    action: { label: 'Descargar plantilla (Google Docs)', href: TEMPLATE_PONENCIA, external: true },
  },
  {
    num: '2',
    icon: BookOpen,
    title: 'Redacta tu ponencia',
    desc: 'Escribe tu trabajo siguiendo los requisitos de formato. Máximo 8 páginas, resumen bilingüe, referencias en APA 7.',
    action: null,
  },
  {
    num: '3',
    icon: Mail,
    title: 'Envíala por correo',
    desc: 'Envía tu ponencia en formato PDF al correo del foro. Indica en el asunto: tu nombre, la mesa y el título del trabajo.',
    action: {
      label: 'fororegionalcomie@ujat.mx',
      href: 'mailto:fororegionalcomie@ujat.mx?subject=Ponencia%20—%20[Mesa%20X]%20—%20[Título]',
      external: false,
    },
  },
];

export default function PonenciasPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="badge-pill bg-foro-pink/10 text-foro-pink mb-5">Convocatoria abierta</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Envío de Ponencias
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
            Comparte tu investigación o experiencia pedagógica con la comunidad académica
            de la región Sur-Sureste. Las ponencias reciben dictaminación por doble ciego
            y las aprobadas se publican en la memoria electrónica del foro.
          </p>
          {/* CTA rápido a la plantilla */}
          <a
            href={TEMPLATE_PONENCIA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.03] text-base"
          >
            <Download className="w-5 h-5" aria-hidden />
            Descargar plantilla de formato
          </a>
          <p className="mt-3 text-xs text-gray-400">
            Formato Springer · Google Docs · Acceso libre
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Pasos para enviar */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-8 text-gray-900">
            ¿Cómo enviar tu ponencia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col">
                  {/* Número de paso */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-foro-pink text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <Icon className="w-5 h-5 text-gray-400" aria-hidden />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{step.desc}</p>
                  {step.action && (
                    <a
                      href={step.action.href}
                      target={step.action.external ? '_blank' : undefined}
                      rel={step.action.external ? 'noopener noreferrer' : undefined}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foro-pink hover:text-foro-pink-dark transition-colors group"
                    >
                      {step.action.label}
                      {step.action.external
                        ? <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                        : <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                      }
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Instrucción del asunto del correo */}
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Asunto del correo sugerido: </span>
            Ponencia — Mesa [1, 2 o 3] — [Apellido autor principal] — [Título breve]
          </div>
        </section>

        {/* Fechas importantes */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-6 text-gray-900">Fechas importantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dates.map(({ icon: Icon, label, date, emphasis }) => (
              <div
                key={label}
                className={`rounded-2xl p-6 border ${
                  emphasis ? 'bg-foro-pink/5 border-foro-pink/30' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <Icon className={`w-5 h-5 mb-3 ${emphasis ? 'text-foro-pink' : 'text-gray-400'}`} aria-hidden />
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">{label}</p>
                <p className={`font-display font-semibold text-base ${emphasis ? 'text-foro-pink' : 'text-gray-900'}`}>
                  {date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mesas de trabajo */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-2 text-gray-900">
            Mesas de trabajo
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Al enviar tu correo, indica la mesa que corresponde a tu investigación.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mesas.map((mesa) => {
              const Icon = mesa.icon;
              return (
                <div
                  key={mesa.id}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden border-t-4 ${mesa.borderColor}`}
                >
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${mesa.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${mesa.iconColor}`} aria-hidden />
                    </div>
                    <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                      {mesa.number}
                    </span>
                    <h3 className="font-display font-bold text-base mt-1 mb-2 leading-snug text-gray-900">
                      {mesa.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">{mesa.eje}</p>
                    <ul className="space-y-1.5">
                      {mesa.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Requisitos de formato */}
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight mb-6 text-gray-900">Requisitos de formato</h2>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <ul className="space-y-3 mb-6">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-foro-pink shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-gray-600 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
            <a
              href={TEMPLATE_PONENCIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-200 text-sm"
            >
              <Download className="w-4 h-4" aria-hidden />
              Abrir plantilla de formato (Springer)
              <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden />
            </a>
          </div>
        </section>

        {/* Bloque de contacto */}
        <section>
          <div className="bg-foro-pink/5 rounded-2xl border border-foro-pink/20 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Mail className="w-8 h-8 text-foro-pink shrink-0" aria-hidden />
            <div className="flex-1">
              <h3 className="font-semibold mb-1 text-gray-900">¿Tienes dudas sobre el proceso de envío?</h3>
              <p className="text-sm text-gray-600">
                Escríbenos a{' '}
                <a href="mailto:fororegionalcomie@ujat.mx" className="text-foro-pink hover:underline font-medium">
                  fororegionalcomie@ujat.mx
                </a>
                {' '}o a{' '}
                <a href="mailto:arturo.corona@ujat.mx" className="text-foro-pink hover:underline font-medium">
                  arturo.corona@ujat.mx
                </a>
              </p>
            </div>
            <a
              href="mailto:fororegionalcomie@ujat.mx?subject=Ponencia%20—%20Mesa%20[X]%20—%20[Título]"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shrink-0 text-sm"
            >
              <Mail className="w-4 h-4" aria-hidden />
              Enviar correo
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
