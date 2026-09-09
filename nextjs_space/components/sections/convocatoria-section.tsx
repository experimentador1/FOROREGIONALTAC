'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download } from 'lucide-react';
import { TEMPLATE_PONENCIA } from '@/lib/forms';

const lineamientos = [
  {
    title: 'Modalidades y límites de extensión',
    items: [
      {
        label: 'Ponencias',
        text: 'extensión máxima de 4,000 palabras (incluyendo resumen, cuerpo del texto, tablas, figuras y referencias). Orientadas a investigaciones concluidas o con resultados empíricos consolidados.',
      },
      {
        label: 'Textos breves (Short papers)',
        text: 'extensión máxima de 800 palabras. Diseñados para avances significativos de investigación, ensayos teóricos de frontera, sistematizaciones de experiencias pedagógicas o desarrollos conceptuales preliminares.',
      },
    ],
  },
  {
    title: 'Autoría y conformación de equipos',
    text: 'Se admitirá un máximo de hasta tres (3) autores por contribución, promoviendo la colaboración interinstitucional y la representatividad regional en la autoría.',
  },
  {
    title: 'Originalidad y pertinencia temática',
    text: 'Los envíos deberán constituir aportes estrictamente inéditos, no encontrarse postulados simultáneamente en otros eventos o publicaciones, y guardar correspondencia directa con los ejes temáticos del foro.',
  },
  {
    title: 'Integridad académica y uso de IA Generativa',
    text: 'Si se emplearon herramientas de Inteligencia Artificial Generativa (IAGen) durante la fase de apoyo técnico o redacción, su intervención deberá declararse formalmente en el manuscrito y no superar bajo ninguna circunstancia el 10% del contenido global de la obra, reservando la autoría intelectual, el análisis crítico y la interpretación substantive a los autores humanos.',
  },
  {
    title: 'Formato estandarizado',
    text: 'Es de uso obligatorio la plantilla oficial del foro.',
  },
];

export function ConvocatoriaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="convocatoria" className="py-20 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3 text-center">
            Participación académica
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-8 leading-snug">
            Convocatoria de Contribuciones: Ponencias y Textos Breves (Short Papers)
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-[1.05rem]">
            <p>
              El Comité Académico extiende una cordial invitación a investigadoras, investigadores,
              docentes, tecnólogos y estudiantes de posgrado a postular sus trabajos inéditos.
              Concebimos el aprendizaje mediado por Inteligencia Artificial no como la mera
              importación de soluciones estandarizadas, sino como un telar vivo: una arquitectura
              pedagógica donde cada hilo tecnológico adquiere verdadero sentido y pertinencia al
              entrelazarse con las realidades socioculturales, saberes locales y desafíos
              estructurales de nuestra región.
            </p>
            <p>
              Buscamos contribuciones que examinen críticamente el despliegue de la IA en los
              ecosistemas de aprendizaje, privilegiando aquellas propuestas que desmonten
              asimetrías de acceso, problematicen sesgos epistémicos y propongan soberanías
              pedagógicas contextualizadas.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-gray-200">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Criterios y Lineamientos de Postulación
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Las propuestas recibidas serán evaluadas mediante arbitraje académico considerando
              su pertinencia temática, consistencia teórica, rigor metodológico y relevancia
              regional. Todas las contribuciones deberán apegarse estrictamente a los siguientes
              lineamientos:
            </p>

            <div className="space-y-6">
              {lineamientos.map((item) => (
                <div key={item.title} className="pl-4 border-l-2 border-foro-pink/40">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  {item.items ? (
                    <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <strong className="text-gray-800">{sub.label}:</strong> {sub.text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TEMPLATE_PONENCIA}
              download="PrototipoSpringer_APA7.docx"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" aria-hidden />
              Descargar plantilla oficial
            </a>
            <a
              href="/ponencias"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <FileText className="w-4 h-4" aria-hidden />
              Ver proceso de envío
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
