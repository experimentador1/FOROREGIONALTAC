import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/forms/contact-form';
import { Mail, MapPin, ExternalLink, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contacto | Foro Regional TAC-IA',
  description: 'Contacta al comité organizador del Foro Regional TAC-IA — UJAT DACyTI',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Coordinación académica',
    value: 'arturo.corona@ujat.mx',
    href: 'mailto:arturo.corona@ujat.mx',
    linkLabel: 'Enviar mensaje',
  },
  {
    icon: MapPin,
    label: 'Sede institucional',
    value: 'UJAT – DACyTI, Villahermosa, Tabasco, México',
    href: null,
    linkLabel: null,
  },
  {
    icon: Clock,
    label: 'Modalidad',
    value: 'Virtual sincrónico · Acceso gratuito · 15 oct 2026',
    href: null,
    linkLabel: null,
  },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-foro-cream dark:bg-gray-950">
      <Navbar />

      {/* Page header */}
      <div className="bg-white dark:bg-gray-900 border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="badge-pill bg-foro-pink/10 text-foro-pink mb-4">Escríbenos</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">Contacto</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Envíanos tus preguntas, comentarios o solicitudes. El comité organizador te responderá a la brevedad.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, linkLabel }) => (
              <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-border/40 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-foro-pink/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-foro-pink" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">{label}</p>
                    <p className="text-sm font-medium break-all leading-snug">{value}</p>
                    {href && linkLabel && (
                      <a
                        href={href}
                        className="inline-flex items-center gap-1 mt-2 text-xs text-foro-pink hover:text-foro-pink-dark transition-colors cursor-pointer font-medium"
                      >
                        {linkLabel}
                        <ExternalLink className="w-3 h-3" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Google Form link */}
            <div className="bg-foro-pink/5 dark:bg-foro-pink/10 rounded-2xl p-5 border border-foro-pink/20">
              <p className="text-sm font-semibold mb-2">¿Quieres enviar una ponencia?</p>
              <p className="text-xs text-muted-foreground mb-3">Usa el formulario de Google para enviar tu trabajo de investigación.</p>
              <a
                href="https://forms.gle/BUCDyTQDxmBKUdLN9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foro-pink text-white text-sm font-semibold rounded-full hover:bg-foro-pink-dark transition-all duration-200 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" aria-hidden />
                Ir al formulario de ponencias
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-border/40 p-6 sm:p-8">
              <h2 className="font-display font-bold text-lg mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
