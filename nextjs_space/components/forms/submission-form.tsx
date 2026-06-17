'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { User, Mail, Building, FileText, BookOpen, Send, CheckCircle, Loader2, Upload, AlertCircle } from 'lucide-react';

const schema = z.object({
  authorName: z.string().min(3, 'Nombre del autor es requerido'),
  authorInstitution: z.string().min(2, 'Institución es requerida'),
  authorEmail: z.string().email('Email inválido'),
  title: z.string().min(5, 'Título de la ponencia es requerido'),
  thematicAxis: z.string().min(1, 'Selecciona un eje'),
  summary: z.string().min(50, 'El resumen debe tener al menos 50 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!file) {
      toast.error('Debes adjuntar un archivo PDF');
      return;
    }
    setLoading(true);
    try {
      // 1. Get presigned URL
      setUploading(true);
      const presignedRes = await fetch('/api/upload/presigned', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type, isPublic: false }),
      });
      const presigned = await presignedRes.json();
      if (!presigned?.uploadUrl) throw new Error('Error obteniendo URL de subida');

      // 2. Upload file to S3
      const uploadHeaders: Record<string, string> = { 'Content-Type': file.type };
      const url = new URL(presigned.uploadUrl);
      const signedHeaders = url.searchParams.get('X-Amz-SignedHeaders') ?? '';
      if (signedHeaders.includes('content-disposition')) {
        uploadHeaders['Content-Disposition'] = 'attachment';
      }
      const uploadRes = await fetch(presigned.uploadUrl, {
        method: 'PUT',
        headers: uploadHeaders,
        body: file,
      });
      if (!uploadRes.ok) throw new Error('Error subiendo archivo');
      setUploading(false);

      // 3. Save submission
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          cloudStoragePath: presigned.cloud_storage_path,
          fileName: file.name,
        }),
      });
      const result = await res.json();
      if (result?.success) {
        setSubmitted(true);
        toast.success('Ponencia enviada exitosamente');
      } else {
        toast.error(result?.error ?? 'Error al enviar');
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message ?? 'Error al enviar ponencia');
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2">¡Ponencia enviada!</h3>
        <p className="text-muted-foreground">Tu ponencia ha sido recibida y será sometida a dictaminación doble ciego. Recibirás información por correo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Nombre del autor *</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('authorName')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="Nombre completo" />
        </div>
        {errors?.authorName && <p className="text-xs text-destructive mt-1">{errors.authorName.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Institución *</label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('authorInstitution')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="Institución de afiliación" />
        </div>
        {errors?.authorInstitution && <p className="text-xs text-destructive mt-1">{errors.authorInstitution.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Correo electrónico *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('authorEmail')} type="email" className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="correo@ejemplo.com" />
        </div>
        {errors?.authorEmail && <p className="text-xs text-destructive mt-1">{errors.authorEmail.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Título de la ponencia *</label>
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input {...register('title')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all" placeholder="Título de tu ponencia" />
        </div>
        {errors?.title && <p className="text-xs text-destructive mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Eje temático *</label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <select {...register('thematicAxis')} className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all">
            <option value="">Selecciona un eje</option>
            <option value="1">Eje 1: Analíticas del aprendizaje</option>
            <option value="2">Eje 2: Entornos educativos inteligentes</option>
            <option value="3">Eje 3: Innovación pedagógica con IA</option>
          </select>
        </div>
        {errors?.thematicAxis && <p className="text-xs text-destructive mt-1">{errors.thematicAxis.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Resumen *</label>
        <textarea {...register('summary')} rows={5} className="w-full px-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none transition-all resize-none" placeholder="Resumen de tu ponencia (mínimo 50 caracteres)" />
        {errors?.summary && <p className="text-xs text-destructive mt-1">{errors.summary.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium mb-1.5 block">Archivo PDF *</label>
        <div className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${
          file ? 'border-foro-pink/50 bg-foro-pink/5' : 'border-border hover:border-foro-pink/30'
        }`}>
          <input
            type="file"
            accept=".pdf"
            onChange={(e: any) => {
              const f = e?.target?.files?.[0];
              if (f && f?.type === 'application/pdf') {
                setFile(f);
              } else if (f) {
                toast.error('Solo se aceptan archivos PDF');
              }
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {file ? (
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-foro-pink" />
              <span className="text-sm font-medium">{file?.name}</span>
            </div>
          ) : (
            <div>
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Arrastra tu archivo PDF o haz clic para seleccionar</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700 dark:text-amber-400">Las ponencias serán sometidas a dictaminación doble ciego. Asegúrate de que tu archivo no contenga datos de identificación.</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {uploading ? 'Subiendo archivo...' : loading ? 'Enviando...' : 'Enviar Ponencia'}
      </button>
    </form>
  );
}
