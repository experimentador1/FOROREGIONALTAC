'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Mic2, FileText, Video } from 'lucide-react';

const events = [
  {
    time: '10:00 hrs',
    title: 'Palabras de bienvenida al evento',
    speaker: 'Dra. Laura Beatríz Vidal Turrubiates',
    affiliation: 'Directora de la DACyTI UJAT',
    icon: Award,
    accent: true,
  },
  {
    time: '10:15 hrs',
    title: 'Conferencia magistral del foro',
    speaker: 'Maestro Alfredo González Estrada',
    affiliation: 'Moodle Expert',
    icon: Mic2,
    accent: true,
  },
  {
    time: '11:00 hrs',
    title: 'Humanizar la transformación digital: celular e inteligencia artificial generativa en la educación media superior',
    speaker: 'Teresita de Jesús Camacho Gaspar',
    affiliation: '',
    icon: FileText,
  },
  {
    time: '11:20 hrs',
    title: 'Uso sistemático frente a uso informal de la inteligencia artificial en la Educación Media Superior: impacto en el aprovechamiento académico en un bachillerato bivalente de México',
    speaker: 'Jose Luis García Cruz',
    affiliation: '',
    icon: FileText,
  },
  {
    time: '11:40 hrs',
    title: 'Motivación hacia el uso de inteligencia artificial en estudiantes de Ciencias de la comunicación desde la teoría de las expectativas',
    speaker: 'Pablo Martínez López',
    affiliation: 'Universidad Autónoma del Estado de Hidalgo',
    icon: FileText,
  },
  {
    time: '12:00 hrs',
    title: 'La inteligencia artificial en el aula universitaria: acción humana, inclusión y gobernanza',
    speaker: 'Yeny Jiménez Izquierdo',
    affiliation: 'Universidad Juárez Autónoma de Tabasco',
    icon: FileText,
  },
  {
    time: '12:20 hrs',
    title: 'IA para la higiene dental. Artefacto de aprendizaje experiencial para la higiene bucal infantil',
    speaker: 'Gerardo Antonino Mendoza Bulnes',
    affiliation: 'Alumno de Posgrado · Universidad Juárez Autónoma de Tabasco',
    icon: FileText,
  },
  {
    time: '12:40 hrs',
    title: 'Agente Conversacional Afectivo en aulas masificadas',
    speaker: 'Rafael de Jesús Torres Enríquez',
    affiliation: 'Alumno de Posgrado · Universidad Juárez Autónoma de Tabasco',
    icon: FileText,
  },
  {
    time: '13:00 hrs',
    title: 'Problemas de la enseñanza del aprendizaje motor y respuestas mediante la IA de la Visión Computacional: avance de una investigación en la UJAT',
    speaker: 'Carlos Manuel Alpuche Ortiz',
    affiliation: 'Alumno de Posgrado · Universidad Juárez Autónoma de Tabasco',
    icon: FileText,
  },
  {
    time: '13:20 hrs',
    title: 'Cierre oficial del Foro Regional TAC-IA',
    speaker: 'Clausura del evento',
    affiliation: '',
    icon: Award,
    accent: true,
  },
];

export function ProgramSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="programa" className="py-20 sm:py-28 bg-foro-cream dark:bg-gray-950" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Programa</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Agenda del Foro
          </h2>
          <div className="inline-flex items-center gap-2 bg-foro-pink/10 px-4 py-2 rounded-full text-sm text-foro-pink font-medium">
            <Video className="w-4 h-4" />
            Modalidad virtual sincrónica &middot; Google Meet / YouTube Live
          </div>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-900 rounded-full px-8 py-3.5 shadow-md">
            <span className="text-sm font-semibold text-foro-pink">
              15 de octubre de 2026
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foro-pink via-foro-pink/50 to-transparent" />
          <div className="space-y-4">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={`${event.time}-${event.speaker}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative pl-16 sm:pl-20"
                >
                  <div
                    className={`absolute left-4 sm:left-6 top-4 w-4 h-4 rounded-full border-2 ${
                      event.accent
                        ? 'bg-foro-pink border-foro-pink shadow-md shadow-foro-pink/30'
                        : 'bg-white dark:bg-gray-800 border-foro-pink/50'
                    }`}
                  />

                  <div
                    className={`rounded-xl p-5 sm:p-6 transition-all hover:shadow-md ${
                      event.accent
                        ? 'bg-gradient-to-r from-foro-pink/5 to-foro-pink-dark/5 border border-foro-pink/20'
                        : 'bg-white dark:bg-gray-900 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          event.accent ? 'bg-foro-pink/10' : 'bg-muted'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${event.accent ? 'text-foro-pink' : 'text-muted-foreground'}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-mono font-semibold text-foro-pink">{event.time}</span>
                        <h4 className="font-display font-semibold mt-1 text-gray-900">{event.speaker}</h4>
                        {event.affiliation ? (
                          <p className="text-xs text-muted-foreground mt-0.5">{event.affiliation}</p>
                        ) : null}
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{event.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          Horario: 10:00 – 13:20 hrs (hora centro de México) • Programa sujeto a cambios
        </motion.p>
      </div>
    </section>
  );
}
