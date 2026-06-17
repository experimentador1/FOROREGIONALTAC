'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Globe, Lightbulb } from 'lucide-react';

const stats = [
  { value: '3', label: 'Ejes temáticos' },
  { value: '2', label: 'Días de evento' },
  { value: '100%', label: 'Virtual y gratuito' },
  { value: 'Sur-Sureste', label: 'Región COMIE' },
];

const features = [
  {
    icon: Target,
    title: 'Objetivo',
    desc: 'Generar un espacio académico de intercambio y debate sobre investigaciones en Analíticas del Aprendizaje y Entornos Educativos con IA.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    desc: 'Articular hallazgos de estudiantes, docentes e investigadores de instituciones afines de la región Sur-Sureste.',
  },
  {
    icon: Globe,
    title: 'Redes',
    desc: 'Consolidar redes colaborativas de investigación e identificar vacíos tecnológicos en el campo de las TAC.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    desc: 'Producir aportes originales que enriquezcan las Tecnologías del Aprendizaje y el Conocimiento en contextos diversos.',
  },
];

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="acerca" className="bg-foro-cream dark:bg-gray-950" ref={ref}>

      {/* Stats strip */}
      <div className="border-b border-border/60 bg-white dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center py-7 px-4 text-center"
              >
                <span className="font-display text-2xl sm:text-3xl font-bold text-foro-pink leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="badge-pill bg-foro-pink/10 text-foro-pink mb-4">Acerca del Foro</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ciencia y tecnología al servicio de la humanidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Promovemos la reflexión crítica sobre el papel de la Inteligencia Artificial
            en la transformación de los procesos educativos, con un enfoque regional,
            inclusivo y decolonial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-border/40 card-hover cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-foro-pink/10 flex items-center justify-center mb-4 group-hover:bg-foro-pink/20 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-foro-pink" aria-hidden />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
