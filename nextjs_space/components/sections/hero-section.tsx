'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Video, ArrowRight, FileText, Clock } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const importantDates = [
  { label: 'Cierre de ponencias', date: '25 ago 2025', icon: FileText },
  { label: 'Notificación', date: '30 sep 2025', icon: Clock },
  { label: 'Evento virtual', date: '28–29 oct 2025', icon: Calendar },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f5f3ee] -mt-[128px] sm:-mt-[144px] md:-mt-[160px] lg:-mt-[176px]"
    >
      {/* Acento de color superior */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-foro-pink via-foro-pink-dark to-foro-pink" aria-hidden />

      {/* Patrón de fondo sutil — tono crema */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #c8b8a2 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blob decorativo rosa — esquina derecha */}
      <div
        className="absolute -right-32 top-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden
        style={{
          background: 'radial-gradient(circle, rgba(255,43,79,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 flex items-center pt-[128px] sm:pt-[144px] md:pt-[160px] lg:pt-[176px]">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-16 text-center">

          {/* Badge institucional */}
          <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foro-pink/10 border border-foro-pink/25 text-foro-pink text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-foro-pink inline-block" aria-hidden />
              Foro Regional COMIE · Región Sur-Sureste
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Tecnologías del{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff2b4f 0%, #bd243e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Aprendizaje
            </span>
            <br />
            con Inteligencia Artificial
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          >
            Espacio académico de intercambio, debate y socialización de investigaciones
            sobre IA en la transformación educativa — con enfoque regional, inclusivo y decolonial.
          </motion.p>

          {/* Info de evento */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <span className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-5 py-2.5 rounded-full text-gray-700 text-sm font-medium">
              <Calendar className="w-4 h-4 text-foro-pink" aria-hidden />
              28 – 29 de octubre, 2025
            </span>
            <span className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-5 py-2.5 rounded-full text-gray-700 text-sm font-medium">
              <Video className="w-4 h-4 text-foro-pink" aria-hidden />
              Virtual sincrónico · Acceso gratuito
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Primario */}
            <Link
              href="/registro"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-foro-pink text-white font-bold rounded-full hover:bg-foro-pink-dark transition-all duration-200 shadow-lg shadow-foro-pink/25 hover:shadow-xl hover:scale-[1.03]"
            >
              Registrarse gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>

            {/* Secundario — borde oscuro, texto oscuro: máximo contraste */}
            <a
              href="https://forms.gle/BUCDyTQDxmBKUdLN9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" aria-hidden />
              Enviar ponencia
            </a>
          </motion.div>

          {/* Strip de fechas clave */}
          <motion.div
            {...fadeUp(0.6)}
            className="inline-grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
          >
            {importantDates.map(({ label, date, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1 px-8 py-5 bg-white">
                <Icon className="w-4 h-4 text-foro-pink mb-1" aria-hidden />
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{label}</span>
                <span className="text-gray-900 font-bold text-sm">{date}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex justify-center pb-10"
        aria-hidden
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-foro-pink" />
        </div>
      </motion.div>
    </section>
  );
}
