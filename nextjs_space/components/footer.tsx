'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Hash, ExternalLink } from 'lucide-react';

const navLinks = [
  { href: '/#ejes', label: 'Ejes Temáticos' },
  { href: '/#programa', label: 'Programa' },
  { href: '/#ponentes', label: 'Mesas de Trabajo' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/registro', label: 'Registro' },
  { href: '/contacto', label: 'Contacto' },
];

const contacts = [
  { label: 'Foro Regional', email: 'fororegionalcomie@ujat.mx' },
  { label: 'Coordinación', email: 'arturo.corona@ujat.mx' },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-foro-pink/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Branding */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden p-1 shrink-0">
                <Image src="/images/ujat-logo.png" alt="UJAT" fill className="object-contain p-0.5" />
              </div>
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden p-1 shrink-0">
                <Image src="/images/dacyti-logo.png" alt="DACyTI" fill className="object-contain p-0.5" />
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-snug mb-1">
                Foro Regional TAC-IA
              </p>
              <p className="text-xs leading-relaxed">
                Universidad Juárez Autónoma de Tabasco<br />
                División Académica de Ciencias y Tecnologías de la Información<br />
                <span className="text-gray-600">Villahermosa, Tabasco, México</span>
              </p>
            </div>
            {/* Hashtags */}
            <div className="flex items-start gap-2 text-xs">
              <Hash className="w-3.5 h-3.5 text-foro-pink shrink-0 mt-0.5" aria-hidden />
              <span className="text-gray-600">#ForosRegionales2026 · #ForosCOMIE · #RegionSurSureste</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <p className="text-white text-sm font-semibold mb-4">Navegación</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-foro-pink transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ponencias */}
          <div className="md:col-span-2">
            <p className="text-white text-sm font-semibold mb-4">Mesas de trabajo</p>
            <ul className="space-y-2">
              <li>
                <Link href="/ponencias" className="text-sm text-foro-pink hover:text-foro-pink-dark transition-colors duration-150">
                  Mesa 1 — Analíticas con equidad
                </Link>
              </li>
              <li>
                <Link href="/ponencias" className="text-sm text-foro-pink hover:text-foro-pink-dark transition-colors duration-150">
                  Mesa 2 — IA con saberes situados
                </Link>
              </li>
              <li>
                <Link href="/ponencias" className="text-sm text-foro-pink hover:text-foro-pink-dark transition-colors duration-150">
                  Mesa 3 — Pedagogías posibles
                </Link>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3 leading-snug">
              Dictaminación doble ciego
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-white text-sm font-semibold mb-4">Contacto</p>
            <div className="space-y-3">
              {contacts.map((c) => (
                <div key={c.email} className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-foro-pink shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="text-xs text-gray-600">{c.label}</p>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-sm hover:text-foro-pink transition-colors duration-150 cursor-pointer break-all"
                    >
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-foro-pink shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm">Villahermosa, Tabasco, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>&copy; 2026 UJAT – DACyTI. Foro Regional "Tecnologías del Aprendizaje con Inteligencia Artificial".</p>
          <p>Organizado en el marco de los Foros Regionales COMIE 2025–2026.</p>
        </div>
      </div>
    </footer>
  );
}
