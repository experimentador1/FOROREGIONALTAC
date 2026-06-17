'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCircle, Bell } from 'lucide-react';

const speakers = [
  { id: 1, name: 'Por confirmar', role: 'Panelista invitado/a', topic: 'Eje 1: Analíticas del aprendizaje' },
  { id: 2, name: 'Por confirmar', role: 'Panelista invitado/a', topic: 'Eje 2: Entornos educativos inteligentes' },
  { id: 3, name: 'Por confirmar', role: 'Panelista invitado/a', topic: 'Eje 3: Innovación pedagógica con IA' },
];

export function SpeakersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ponentes" className="py-20 sm:py-28 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Panel Inaugural</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Expertos Invitados
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Voces plurales y TAC en la era de la IA: epistemologías y desafíos regionales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers?.map((speaker: any, i: number) => (
            <motion.div
              key={speaker?.id ?? i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-gradient-to-b from-muted/30 to-muted/10 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-foro-pink/20 to-foro-pink-dark/20 flex items-center justify-center">
                <UserCircle className="w-16 h-16 text-foro-pink/40" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{speaker?.name}</h3>
              <p className="text-sm text-foro-pink font-medium mb-2">{speaker?.role}</p>
              <p className="text-xs text-muted-foreground">{speaker?.topic}</p>

              <div className="mt-6 inline-flex items-center gap-2 bg-foro-pink/10 px-4 py-2 rounded-full">
                <Bell className="w-3.5 h-3.5 text-foro-pink" />
                <span className="text-xs font-medium text-foro-pink">Próximamente</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
