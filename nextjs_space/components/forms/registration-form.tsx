'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { User, Mail, Building, BookOpen, Send, CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(3, 'Nombre completo es requerido'),
  email: z.string().email('Email inválido'),
  institution: z.string().min(2, 'Institución es requerida'),
  participantType: z.string().min(1, 'Selecciona un tipo'),
  originInstitution: z.string().optional(),
  researchLine: z.string().optional(),
  thematicAxis: z.string().min(1, 'Selecciona un eje'),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const participantType = watch('participantType');

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result?.success) {
        setSubmitted(true);
        toast.success('Registro exitoso');
      } else {
        toast.error(result?.error ?? 'Error al registrar');
      }
    } catch {
      toast.error('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2">¡Registro exitoso!</h3>
        <p className="text-muted-foreground">Tu registro ha sido recibido. Recibirás información adicional por correo electrónico.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">
      {/* Name */}
      <div>
        <label className="text-sm font-medium mb-1.5 block">Nombre completo *</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            {...register('fullName')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
            placeholder="Tu nombre completo"
          />
        </div>
        {errors?.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium mb-1.5 block">Correo electrónico *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            {...register('email')}
            type="email"
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
            placeholder="correo@ejemplo.com"
          />
        </div>
        {errors?.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
      </div>

      {/* Institution */}
      <div>
        <label className="text-sm font-medium mb-1.5 block">Institución *</label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            {...register('institution')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
            placeholder="Nombre de tu institución"
          />
        </div>
        {errors?.institution && <p className="text-xs text-destructive mt-1">{errors.institution.message}</p>}
      </div>

      {/* Participant Type */}
      <div>
        <label className="text-sm font-medium mb-1.5 block">Tipo de participante *</label>
        <select
          {...register('participantType')}
          className="w-full px-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
        >
          <option value="">Selecciona una opción</option>
          <option value="Alumno">Alumno</option>
          <option value="Investigador">Investigador</option>
          <option value="Docente">Docente</option>
          <option value="Otro">Otro</option>
        </select>
        {errors?.participantType && <p className="text-xs text-destructive mt-1">{errors.participantType.message}</p>}
      </div>

      {/* Conditional fields */}
      {(participantType === 'Alumno' || participantType === 'Investigador') && (
        <div>
          <label className="text-sm font-medium mb-1.5 block">Institución de procedencia</label>
          <input
            {...register('originInstitution')}
            className="w-full px-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
            placeholder="Institución de procedencia"
          />
        </div>
      )}

      {participantType === 'Investigador' && (
        <div>
          <label className="text-sm font-medium mb-1.5 block">Línea de investigación</label>
          <input
            {...register('researchLine')}
            className="w-full px-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
            placeholder="Tu línea de investigación"
          />
        </div>
      )}

      {/* Thematic Axis */}
      <div>
        <label className="text-sm font-medium mb-1.5 block">Eje temático de interés *</label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <select
            {...register('thematicAxis')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all"
          >
            <option value="">Selecciona un eje</option>
            <option value="1">Eje 1: Analíticas del aprendizaje</option>
            <option value="2">Eje 2: Entornos educativos inteligentes</option>
            <option value="3">Eje 3: Innovación pedagógica con IA</option>
          </select>
        </div>
        {errors?.thematicAxis && <p className="text-xs text-destructive mt-1">{errors.thematicAxis.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? 'Registrando...' : 'Completar Registro'}
      </button>

      <p className="text-xs text-center text-muted-foreground">Tus datos serán tratados de manera confidencial.</p>
    </form>
  );
}
