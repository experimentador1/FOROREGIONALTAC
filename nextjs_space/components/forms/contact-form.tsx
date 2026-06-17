'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { User, Mail, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Nombre es requerido'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Asunto es requerido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result?.success) {
        setSubmitted(true);
        toast.success('Mensaje enviado');
      } else {
        toast.error(result?.error ?? 'Error al enviar');
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
        <h3 className="font-display text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground">Hemos recibido tu mensaje. Te responderemos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Nombre *</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('name')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="Tu nombre" />
        </div>
        {errors?.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Correo electrónico *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('email')} type="email" className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="correo@ejemplo.com" />
        </div>
        {errors?.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Asunto *</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('subject')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="Asunto de tu mensaje" />
        </div>
        {errors?.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Mensaje *</label>
        <textarea {...register('message')} rows={5} className="w-full px-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all resize-none" placeholder="Escribe tu mensaje" />
        {errors?.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      <p className="text-xs text-center text-muted-foreground">Tu información será tratada de manera confidencial.</p>
    </form>
  );
}
