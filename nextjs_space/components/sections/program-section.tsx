'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Clock, Mic2, MessageSquare, FileText, Award, Video, Users } from 'lucide-react';

const day1 = [
  { time: '10:00 AM', title: 'Ceremonia de Inauguración', icon: Award, desc: 'Palabras de bienvenida de autoridades de la UJAT y DACyTI', accent: true },
  { time: '10:30 AM', title: 'Panel Inaugural', icon: Mic2, desc: '"Voces plurales y TAC en la era de la IA: epistemologías y desafíos regionales" — 3 expertos invitados', accent: true },
  { time: '12:00 PM', title: 'Mesa de Diálogo — Eje 1', icon: MessageSquare, desc: 'Analíticas de los aprendizajes y la IA' },
  { time: '12:00 PM', title: 'Mesa de Diálogo — Eje 2', icon: MessageSquare, desc: 'Entornos educativos inteligentes, lenguas y saberes locales' },
  { time: '12:00 PM', title: 'Mesa de Diálogo — Eje 3', icon: MessageSquare, desc: 'Innovación pedagógica con IA y voces regionales' },
  { time: '2:00 PM', title: 'Cierre del Día 1', icon: Clock, desc: 'Conclusiones y avance del programa del Día 2' },
];

const day2 = [
  { time: '10:00 AM', title: 'Ponencias Arbitradas — Sala 1', icon: FileText, desc: '4 ponencias simultáneas de investigación' },
  { time: '10:00 AM', title: 'Ponencias Arbitradas — Sala 2', icon: FileText, desc: '4 ponencias simultáneas de investigación' },
  { time: '12:30 PM', title: 'Sesión Plenaria', icon: Users, desc: 'Síntesis de resultados y diálogo colectivo' },
  { time: '1:30 PM', title: 'Ceremonia de Clausura', icon: Award, desc: 'Conclusiones, reconocimientos y próximos pasos para la Red Regional', accent: true },
];

export function ProgramSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeDay, setActiveDay] = useState(0);
  const events = activeDay === 0 ? day1 : day2;

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

        {/* Day toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-md gap-1">
            <button
              onClick={() => setActiveDay(0)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeDay === 0 ? 'bg-foro-pink text-white shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Día 1 — 28 Oct
            </button>
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeDay === 1 ? 'bg-foro-pink text-white shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Día 2 — 29 Oct
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foro-pink via-foro-pink/50 to-transparent" />
          <div className="space-y-4">
            {(events ?? []).map((event: any, i: number) => {
              const Icon = event?.icon ?? Clock;
              return (
                <motion.div
                  key={`${activeDay}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative pl-16 sm:pl-20 ${
                    event?.accent ? '' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 sm:left-6 top-4 w-4 h-4 rounded-full border-2 ${
                    event?.accent
                      ? 'bg-foro-pink border-foro-pink shadow-md shadow-foro-pink/30'
                      : 'bg-white dark:bg-gray-800 border-foro-pink/50'
                  }`} />

                  <div className={`rounded-xl p-5 sm:p-6 transition-all hover:shadow-md ${
                    event?.accent
                      ? 'bg-gradient-to-r from-foro-pink/5 to-foro-pink-dark/5 border border-foro-pink/20'
                      : 'bg-white dark:bg-gray-900 shadow-sm'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        event?.accent ? 'bg-foro-pink/10' : 'bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 ${event?.accent ? 'text-foro-pink' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-mono font-semibold text-foro-pink">{event?.time}</span>
                        <h4 className="font-display font-semibold mt-1">{event?.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{event?.desc}</p>
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
          Horario: 10:00 AM – 2:00 PM (hora centro de México) • Programa sujeto a cambios
        </motion.p>
      </div>
    </section>
  );
}
