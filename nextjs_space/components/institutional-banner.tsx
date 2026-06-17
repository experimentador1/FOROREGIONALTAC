import Image from 'next/image';

export function InstitutionalBanner() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-[80px] sm:h-[96px] md:h-[112px] lg:h-[128px] flex items-center justify-between gap-6">

        {/* UJAT — izquierda */}
        <div className="relative shrink-0 h-[56px] sm:h-[68px] md:h-[80px] lg:h-[92px] w-[56px] sm:w-[68px] md:w-[80px] lg:w-[92px]">
          <Image
            src="/images/ujat-logo.png"
            alt="Universidad Juárez Autónoma de Tabasco"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texto institucional — centro izquierdo */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-gray-800 font-bold text-sm md:text-base lg:text-lg tracking-tight">
            Universidad Juárez Autónoma de Tabasco
          </span>
          <span className="text-gray-500 text-xs md:text-sm">
            División Académica de Ciencias y Tecnologías de la Información
          </span>
        </div>

        {/* Separador + título del evento — centro */}
        <div className="flex-1 flex flex-col items-center text-center px-4 border-x border-gray-200 hidden md:flex">
          <span className="text-foro-pink font-bold text-xs uppercase tracking-widest mb-0.5">
            Foros Regionales COMIE 2025–2026
          </span>
          <span className="text-gray-700 font-semibold text-sm lg:text-base leading-tight">
            Región Sur-Sureste
          </span>
        </div>

        {/* Logos derecha: COMIE + DACyTI */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <div className="relative h-[48px] sm:h-[60px] md:h-[72px] lg:h-[82px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[138px]">
            <Image
              src="/images/comie-logo.png"
              alt="COMIE — Consejo Mexicano de Investigación Educativa"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative h-[48px] sm:h-[60px] md:h-[72px] lg:h-[82px] w-[48px] sm:w-[60px] md:w-[72px] lg:w-[82px]">
            <Image
              src="/images/dacyti-logo.png"
              alt="DACyTI — División Académica de Ciencias y Tecnologías de la Información"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
