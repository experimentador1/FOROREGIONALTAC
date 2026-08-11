'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstitutionalBanner } from '@/components/institutional-banner';

const navLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#ejes', label: 'Ejes' },
  { href: '/#programa', label: 'Programa' },
  { href: '/#ponentes', label: 'Mesas' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/contacto', label: 'Contacto' },
];

/**
 * Altura total del header fijo = banner + nav (h-12 = 48px)
 * mobile:   80 + 48 = 128px
 * sm:       96 + 48 = 144px
 * md:      112 + 48 = 160px
 * lg:      128 + 48 = 176px
 */
export const HEADER_HEIGHT_CLASS = 'h-[128px] sm:h-[144px] md:h-[160px] lg:h-[176px]';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Banner institucional */}
      <InstitutionalBanner />

      {/* Barra de navegación */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 h-12">
          <Link href="/" className="font-display font-bold text-sm text-foreground hover:text-foro-pink transition-colors cursor-pointer">
            Foro Regional TAC-IA
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-muted transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/registro"
              className="ml-3 px-5 py-2 bg-foro-pink text-white text-sm font-semibold rounded-full hover:bg-foro-pink-dark transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-black/5 overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/registro"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center mt-2 px-5 py-3 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all cursor-pointer"
                >
                  Registrarse
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
    {/* Reserva el espacio equivalente al header fijo para páginas interiores */}
    <div className={HEADER_HEIGHT_CLASS} aria-hidden="true" />
    </>
  );
}
