'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Mail, Lock, Loader2, LogIn } from 'lucide-react';

export function AdminLoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        toast.error('Credenciales inválidas');
      } else {
        router.replace('/admin');
      }
    } catch {
      toast.error('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e?.target?.value ?? '')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none"
            placeholder="admin@email.com"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-1.5 block">Contraseña</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e?.target?.value ?? '')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-foro-pink/30 focus:border-foro-pink outline-none"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-foro-pink text-white font-semibold rounded-full hover:bg-foro-pink-dark transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </form>
  );
}
