'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/fondo-ppt.png" alt="" fill className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-foro-pink-dark/90 via-foro-pink/90 to-rose-500/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge-pill bg-white/15 text-white/90 mb-6 inline-flex">
            Participación abierta · Acceso gratuito
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            ¿Listo para participar?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg mb-10 leading-relaxed">
            Únete como asistente o comparte tu investigación. El foro es el espacio
            donde las voces de la región Sur-Sureste cobran protagonismo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/registro"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-foro-pink font-bold rounded-full hover:bg-white/92 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
            >
              Registrarse como asistente
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
            <a
              href="https://forms.gle/BUCDyTQDxmBKUdLN9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/12 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/22 transition-all duration-200 border-2 border-white/30 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" aria-hidden />
              Enviar ponencia (Google Form)
            </a>
          </div>

          {/* Fecha límite - urgencia visual */}
          <p className="mt-8 text-white/55 text-sm">
            Fecha límite de recepción de ponencias: <strong className="text-white/90">25 de agosto de 2025</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
