import { ExternalLink } from 'lucide-react';
import { FORM_REGISTRO, FORM_REGISTRO_ASISTENTE } from '@/lib/forms';
import { cn } from '@/lib/utils';

type RegistrationButtonsProps = {
  variant?: 'light' | 'dark';
  layout?: 'column' | 'row';
  className?: string;
};

export function RegistrationButtons({
  variant = 'light',
  layout = 'column',
  className,
}: RegistrationButtonsProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        layout === 'column' ? 'flex flex-col gap-3' : 'flex flex-col sm:flex-row gap-3',
        className,
      )}
    >
      <a
        href={FORM_REGISTRO}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 py-4 font-bold rounded-full transition-all duration-200 hover:scale-[1.02] text-base',
          layout === 'column' ? 'w-full' : 'sm:flex-1',
          isDark
            ? 'bg-white text-foro-pink shadow-xl hover:bg-white/92 hover:shadow-2xl'
            : 'bg-foro-pink text-white hover:bg-foro-pink-dark shadow-lg shadow-foro-pink/25 hover:shadow-xl',
        )}
      >
        <ExternalLink className="w-5 h-5" aria-hidden />
        Registro de ponentes
      </a>
      <a
        href={FORM_REGISTRO_ASISTENTE}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 py-4 font-bold rounded-full transition-all duration-200 hover:scale-[1.02] text-base',
          layout === 'column' ? 'w-full' : 'sm:flex-1',
          isDark
            ? 'bg-white/12 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/22'
            : 'bg-white text-foro-pink border-2 border-foro-pink hover:bg-foro-pink/5',
        )}
      >
        <ExternalLink className="w-5 h-5" aria-hidden />
        Registro de asistente
      </a>
    </div>
  );
}
