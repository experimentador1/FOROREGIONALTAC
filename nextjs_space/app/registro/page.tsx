import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FORM_REGISTRO } from '@/lib/forms';
// URL activa: https://forms.gle/3nmVfiPp4QTdvbiV7
import { ExternalLink, UserCheck, Calendar, Video } from 'lucide-react';

export const metadata = {
  title: 'Registro | Foro Regional TAC-IA',
  description: 'Regístrate como participante del Foro Regional sobre Tecnologías del Aprendizaje con IA — UJAT DACyTI',
};

const benefits = [
  { icon: UserCheck, text: 'Acceso completo a las tres mesas de trabajo' },
  { icon: Calendar, text: 'Constancia digital de participación' },
  { icon: Video, text: 'Acceso al material grabado del evento' },
];

export default function RegistroPage() {
  const isPending = FORM_REGISTRO.startsWith('#PENDIENTE');

  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Inscripción gratuita</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-gray-900">
            Registro de Participantes
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
            La participación es completamente gratuita y en modalidad virtual sincrónica.
            Regístrate para recibir acceso al foro y tu constancia de participación.
          </p>
        </div>

        {/* Dos columnas: Convocatoria (izquierda) + Formulario (derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Columna izquierda — Convocatoria y proceso */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-full">
            <div className="h-1 bg-gradient-to-r from-foro-pink/40 via-foro-pink to-foro-pink/40" />
            <div className="p-7 sm:p-8 space-y-4">
              <h2 className="font-display font-bold text-lg text-gray-900">
                Convocatoria y proceso de registro
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Si desea participar como ponente, deberá enviar su propuesta a más tardar el{' '}
                <strong className="text-gray-800">30 de septiembre</strong>, fecha límite para la
                recepción de trabajos. La notificación de aceptación se enviará el{' '}
                <strong className="text-gray-800">5 de octubre</strong>, por lo que le recomendamos
                completar su registro con anticipación para asegurar su lugar.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Para la elaboración de su trabajo, consulte la{' '}
                <a
                  href="https://docs.google.com/document/d/18nuVEqZ4FJXDivKTn-iMV2CKWIps8MSG/edit?usp=share_link&ouid=111029678610108054956&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foro-pink font-semibold hover:underline inline-flex items-center gap-1"
                >
                  plantilla de publicación
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
                </a>
                , donde encontrará el formato y los lineamientos que deberá seguir su ponencia.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Las ponencias contarán con <strong className="text-gray-800">DOI</strong>{' '}
                (Identificador de Objeto Digital), y aquellas seleccionadas como destacadas se
                integrarán en una memoria del foro, cuya publicación está programada para el{' '}
                <strong className="text-gray-800">1 de diciembre de 2026</strong>.
              </p>
            </div>
          </div>

          {/* Columna derecha — Card de registro */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-foro-pink via-foro-pink-dark to-rose-400" />
            <div className="p-8 sm:p-10">

              {/* Beneficios */}
              <div className="space-y-3 mb-8">
                {benefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-foro-pink/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-foro-pink" aria-hidden />
                    </div>
                    <span className="text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-8">
                {isPending ? (
                  <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500 font-medium mb-1">Formulario de registro próximamente</p>
                    <p className="text-xs text-gray-400">
                      Mientras tanto, escríbenos a{' '}
                      <a href="mailto:fororegionalcomie@ujat.mx" className="text-foro-pink hover:underline">
                        fororegionalcomie@ujat.mx
                      </a>
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-5 text-center">
                      El formulario de registro se realiza a través de Google Forms.
                      Tus datos son tratados de forma confidencial.
                    </p>
                    <a
                      href={FORM_REGISTRO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.02] text-base"
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden />
                      Completar mi registro (Google Form)
                    </a>
                    <p className="text-xs text-center text-gray-400 mt-4">
                      Se abrirá en una nueva pestaña · Acceso gratuito
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
