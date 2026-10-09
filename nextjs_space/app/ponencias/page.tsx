import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TEMPLATE_PONENCIA } from '@/lib/forms';
import {
  ExternalLink, CheckCircle, Calendar,
  FileText, Mail, Download, ArrowRight, BookOpen,
} from 'lucide-react';

export const metadata = {
  title: 'Envío de Ponencias | Foro Regional TAC-IA',
  description: 'Envía tu ponencia al Foro Regional TAC-IA. Descarga la plantilla de formato, redacta tu trabajo y envíalo indicando el eje temático correspondiente.',
};

const requirements = [
  'Usar obligatoriamente la plantilla oficial del foro (Springer APA 7)',
  'Ponencias: máximo 4,000 palabras (resumen, cuerpo, tablas, figuras y referencias)',
  'Textos breves (Short papers): máximo 800 palabras',
  'Máximo de tres (3) autores por contribución',
  'Trabajo inédito, no postulado simultáneamente en otros eventos o publicaciones',
  'Correspondencia directa con los ejes temáticos del foro',
  'Si se usó IA Generativa, declarar su uso; no debe superar el 10% del contenido',
  'Citas y referencias en formato APA 7ª edición',
  'Indicar claramente el eje temático al que se postula',
];

const dates = [
  { icon: FileText,    label: 'Recepción de ponencias',    date: '20 de septiembre de 2026',    emphasis: true },
  { icon: CheckCircle, label: 'Notificación de resultados', date: '5 de octubre de 2026', emphasis: false },
  { icon: Calendar,    label: 'Evento virtual sincrónico',  date: '15 de octubre de 2026',   emphasis: false },
];

const steps = [
  {
    num: '1',
    icon: Download,
    title: 'Descarga la plantilla',
    desc: 'Utiliza la plantilla oficial en formato Springer para redactar tu ponencia. Asegúrate de seguir el formato indicado.',
    action: { label: 'Descargar plantilla (.docx)', href: TEMPLATE_PONENCIA, external: false, download: true },
  },
  {
    num: '2',
    icon: BookOpen,
    title: 'Redacta tu ponencia',
    desc: 'Escribe tu trabajo siguiendo los lineamientos: ponencia (máx. 4,000 palabras) o short paper (máx. 800 palabras), APA 7 y plantilla oficial.',
    action: null,
  },
  {
    num: '3',
    icon: Mail,
    title: 'Envíala por correo',
    desc: 'Envía tu ponencia en formato PDF al correo del foro. Indica en el asunto: tu nombre, el eje temático y el título del trabajo.',
    action: {
      label: 'fororegionalcomie@ujat.mx',
      href: 'mailto:fororegionalcomie@ujat.mx?subject=Ponencia%20—%20[Eje]%20—%20[Título]',
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
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-6">
            Comparte tu investigación o experiencia pedagógica con la comunidad académica
            de la región Sur-Sureste. Las ponencias reciben dictaminación por doble ciego
            y las aprobadas se publican en la memoria electrónica del foro.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Se admiten <strong className="text-gray-700">ponencias</strong> (máx. 4,000 palabras)
            y <strong className="text-gray-700">textos breves / short papers</strong> (máx. 800 palabras),
            con hasta 3 autores, trabajo inédito y uso obligatorio de la plantilla oficial.
            Si se empleó IA generativa, debe declararse y no superar el 10% del contenido.
          </p>
          {/* CTA rápido a la plantilla */}
          <a
            href={TEMPLATE_PONENCIA}
            download="PrototipoSpringer_APA7.docx"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.03] text-base"
          >
            <Download className="w-5 h-5" aria-hidden />
            Descargar plantilla oficial
          </a>
          <p className="mt-3 text-xs text-gray-400">
            Formato Springer APA 7 · Archivo Word (.docx) · Acceso libre
          </p>
          <p className="mt-4">
            <a href="/#convocatoria" className="text-sm font-semibold text-foro-pink hover:underline">
              Ver convocatoria completa y lineamientos →
            </a>
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
                      download={step.action.download ? 'PrototipoSpringer_APA7.docx' : undefined}
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
            Ponencia — [Eje temático] — [Apellido autor principal] — [Título breve]
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
              download="PrototipoSpringer_APA7.docx"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-200 text-sm"
            >
              <Download className="w-4 h-4" aria-hidden />
              Descargar plantilla Springer APA 7 (.docx)
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
              href="mailto:fororegionalcomie@ujat.mx?subject=Ponencia%20—%20[Eje]%20—%20[Título]"
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
