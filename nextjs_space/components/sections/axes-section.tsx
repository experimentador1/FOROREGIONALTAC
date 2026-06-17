'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Brain, Sparkles } from 'lucide-react';
import { useState } from 'react';

const axes = [
  {
    id: 1,
    icon: BarChart3,
    color: 'text-rose-600',
    bgIcon: 'bg-rose-50 dark:bg-rose-950/40',
    borderActive: 'border-l-rose-500',
    title: 'Analíticas del aprendizaje desde perspectivas críticas y plurales',
    topics: ['Minería de datos educativos', 'Tableros e indicadores', 'Evaluación adaptativa', 'Modelos predictivos'],
    emphasis: 'Sesgos algorítmicos, equidad de los datos, voces de comunidades rurales, indígenas y neurodivergentes, y representación de saberes locales en los modelos de IA.',
  },
  {
    id: 2,
    icon: Brain,
    color: 'text-amber-600',
    bgIcon: 'bg-amber-50 dark:bg-amber-950/40',
    borderActive: 'border-l-amber-500',
    title: 'Entornos educativos inteligentes con enfoque decolonial e inclusivo',
    topics: ['Sistemas de tutoría inteligente', 'IA generativa en educación', 'XR/VR/AR pedagógico', 'Plataformas adaptativas'],
    emphasis: 'Lenguas originarias, accesibilidad, brecha digital regional, soberanía tecnológica y epistemologías del Sur aplicadas al diseño de entornos.',
  },
  {
    id: 3,
    icon: Sparkles,
    color: 'text-violet-600',
    bgIcon: 'bg-violet-50 dark:bg-violet-950/40',
    borderActive: 'border-l-violet-500',
    title: 'Innovación pedagógica con IA y voces emergentes',
    topics: ['Ingeniería de prompts en docencia', 'RAG sobre acervos locales', 'Agentes inteligentes MCP', 'Prototipos comunitarios'],
    emphasis: 'Prioridad de cartelera para estudiantes de maestría y doctorado, docentes en formación e investigadores tempranos.',
  },
];

export function AxesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [active, setActive] = useState(0);
  const current = axes[active];
  const Icon = current.icon;

  return (
    <section id="ejes" className="py-20 sm:py-28 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="badge-pill bg-foro-pink/10 text-foro-pink mb-4">Ejes Temáticos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Tres líneas de investigación y diálogo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selecciona el eje que mejor describe tu investigación o área de interés
          </p>
        </motion.div>

        {/* Tab selectors */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {axes.map((axis, i) => {
            const TabIcon = axis.icon;
            const isActive = active === i;
            return (
              <motion.button
                key={axis.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-foro-pink text-white border-foro-pink shadow-md shadow-foro-pink/20'
                    : 'bg-white dark:bg-gray-900 border-border hover:border-foro-pink/40 hover:bg-muted/50'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-white/20' : axis.bgIcon
                }`}>
                  <TabIcon className={`w-5 h-5 ${isActive ? 'text-white' : axis.color}`} aria-hidden />
                </div>
                <div className="min-w-0">
                  <span className={`block text-xs font-mono font-semibold mb-0.5 ${isActive ? 'text-white/70' : 'text-muted-foreground'}`}>
                    EJE {axis.id}
                  </span>
                  <span className={`block text-sm font-semibold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-foreground'}`}>
                    {axis.title}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`bg-muted/40 dark:bg-gray-800/40 rounded-2xl border border-border/50 border-l-4 ${current.borderActive} p-8 sm:p-10`}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: icon + título */}
            <div className="flex items-start gap-4 lg:w-80 shrink-0">
              <div className={`w-14 h-14 rounded-xl ${current.bgIcon} flex items-center justify-center shrink-0`}>
                <Icon className={`w-7 h-7 ${current.color}`} aria-hidden />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-muted-foreground block mb-1">Eje {current.id}</span>
                <h3 className="font-display text-lg font-bold leading-snug">{current.title}</h3>
              </div>
            </div>

            {/* Right: topics + emphasis */}
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Temáticas incluidas</p>
                <div className="flex flex-wrap gap-2">
                  {current.topics.map((topic) => (
                    <span key={topic} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-border/60 text-sm font-medium shadow-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/70 dark:bg-gray-900/60 rounded-xl p-5 border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-foro-pink mb-2">Énfasis especial</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{current.emphasis}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
