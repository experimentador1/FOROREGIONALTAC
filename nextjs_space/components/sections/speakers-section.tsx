'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { BarChart3, Brain, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const mesas = [
  {
    id: 1,
    number: 'Mesa 1',
    name: 'Analíticas con equidad: más allá del algoritmo',
    eje: 'Eje 1: Analíticas del aprendizaje desde perspectivas críticas y plurales',
    icon: BarChart3,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    accentBorder: 'border-t-rose-500',
    topics: ['Minería de datos educativos', 'Evaluación adaptativa', 'Sesgos algorítmicos', 'Equidad en los datos'],
  },
  {
    id: 2,
    number: 'Mesa 2',
    name: 'Inteligencia artificial con saberes situados',
    eje: 'Eje 2: Entornos educativos inteligentes con enfoque decolonial e inclusivo',
    icon: Brain,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    accentBorder: 'border-t-amber-500',
    topics: ['Lenguas indígenas y tecnología educativa', 'Saberes locales y decolonialidad', 'Inclusión y accesibilidad', 'IA en contextos comunitarios'],
  },
  {
    id: 3,
    number: 'Mesa 3',
    name: 'Pedagogías posibles en la era de la IA',
    eje: 'Eje 3: Innovación pedagógica con IA y voces emergentes',
    icon: Sparkles,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    accentBorder: 'border-t-violet-500',
    topics: ['IA generativa en el aula', 'Diseño instruccional con IA', 'Formación docente', 'Investigación emergente'],
  },
];

export function SpeakersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ponentes" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">
            Espacios de presentación
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Mesas de Trabajo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            En el foro se contará con tres espacios temáticos donde se le invita a presentar
            y debatir investigaciones, experiencias pedagógicas y propuestas con enfoque
            regional e inclusivo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mesas.map((mesa, i) => {
            const Icon = mesa.icon;
            return (
              <motion.div
                key={mesa.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 ${mesa.accentBorder}`}
              >
                <div className="p-6 flex-1">
                  <div className={`w-11 h-11 rounded-xl ${mesa.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${mesa.iconColor}`} aria-hidden />
                  </div>
                  <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                    {mesa.number}
                  </span>
                  <h3 className="font-display font-bold text-lg mt-1 mb-2 leading-snug text-gray-900">
                    {mesa.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{mesa.eje}</p>
                  <div className="flex flex-wrap gap-2">
                    {mesa.topics.map((topic) => (
                      <span key={topic} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        <CheckCircle className="w-3 h-3 text-gray-400" aria-hidden />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA — va a /ponencias */}
                <div className="px-6 pb-6">
                  <Link
                    href="/ponencias"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border-2 border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 group"
                  >
                    Ver cómo enviar ponencia
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Dictaminación doble ciego · Fecha límite: <strong>20 de septiembre de 2026</strong>
        </motion.p>
      </div>
    </section>
  );
}
