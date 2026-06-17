'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { LogOut, Newspaper, Plus, Users, FileText, MessageSquare, Loader2, Send } from 'lucide-react';

export function AdminDashboard() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [tab, setTab] = useState('news');
  const [news, setNews] = useState<any[]>([]);
  const [participants, setParticipants] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [newsForm, setNewsForm] = useState({ title: '', excerpt: '', content: '', imageUrl: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      Promise.all([
        fetch('/api/news').then((r) => r.json()).catch(() => []),
        fetch('/api/admin/participants').then((r) => r.json()).catch(() => []),
        fetch('/api/admin/submissions').then((r) => r.json()).catch(() => []),
        fetch('/api/admin/contacts').then((r) => r.json()).catch(() => []),
      ]).then(([n, p, s, c]) => {
        setNews(Array.isArray(n) ? n : []);
        setParticipants(Array.isArray(p) ? p : []);
        setSubmissions(Array.isArray(s) ? s : []);
        setContacts(Array.isArray(c) ? c : []);
        setLoading(false);
      });
    }
  }, [status]);

  const handleCreateNews = async () => {
    if (!newsForm?.title || !newsForm?.excerpt || !newsForm?.content) {
      toast.error('Completa todos los campos');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsForm),
      });
      const result = await res.json();
      if (result?.success) {
        toast.success('Noticia creada');
        setNews((prev) => [result.news, ...(prev ?? [])]);
        setShowNewsForm(false);
        setNewsForm({ title: '', excerpt: '', content: '', imageUrl: '' });
      } else {
        toast.error(result?.error ?? 'Error');
      }
    } catch {
      toast.error('Error al crear noticia');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-foro-cream dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-foro-pink" />
      </div>
    );
  }

  if (status === 'unauthenticated') return null;

  const tabs = [
    { id: 'news', label: 'Noticias', icon: Newspaper, count: news?.length ?? 0 },
    { id: 'participants', label: 'Registros', icon: Users, count: participants?.length ?? 0 },
    { id: 'submissions', label: 'Ponencias', icon: FileText, count: submissions?.length ?? 0 },
    { id: 'contacts', label: 'Contacto', icon: MessageSquare, count: contacts?.length ?? 0 },
  ];

  return (
    <div className="min-h-screen bg-foro-cream dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold">Admin – Foro TAC-IA</h1>
            <p className="text-xs text-muted-foreground">{session?.user?.email ?? ''}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            <LogOut className="w-4 h-4" /> Salir
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-none">
          {tabs?.map((t: any) => {
            const Icon = t?.icon;
            return (
              <button
                key={t?.id}
                onClick={() => setTab(t?.id ?? 'news')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  tab === t?.id ? 'bg-foro-pink text-white shadow-md' : 'bg-white dark:bg-gray-900 hover:bg-muted'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {t?.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${tab === t?.id ? 'bg-white/20' : 'bg-muted'}`}>{t?.count}</span>
              </button>
            );
          })}
        </div>

        {/* News tab */}
        {tab === 'news' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-bold">Noticias</h2>
              <button
                onClick={() => setShowNewsForm(!showNewsForm)}
                className="flex items-center gap-2 px-5 py-2.5 bg-foro-pink text-white text-sm font-semibold rounded-full hover:bg-foro-pink-dark transition-all"
              >
                <Plus className="w-4 h-4" /> Nueva Noticia
              </button>
            </div>

            {showNewsForm && (
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm mb-6 space-y-4">
                <input
                  value={newsForm?.title ?? ''}
                  onChange={(e: any) => setNewsForm((p: any) => ({ ...(p ?? {}), title: e?.target?.value ?? '' }))}
                  className="w-full px-4 py-3 rounded-lg border bg-background text-sm" placeholder="Título"
                />
                <input
                  value={newsForm?.excerpt ?? ''}
                  onChange={(e: any) => setNewsForm((p: any) => ({ ...(p ?? {}), excerpt: e?.target?.value ?? '' }))}
                  className="w-full px-4 py-3 rounded-lg border bg-background text-sm" placeholder="Extracto breve"
                />
                <textarea
                  value={newsForm?.content ?? ''}
                  onChange={(e: any) => setNewsForm((p: any) => ({ ...(p ?? {}), content: e?.target?.value ?? '' }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background text-sm resize-none" placeholder="Contenido completo"
                />
                <input
                  value={newsForm?.imageUrl ?? ''}
                  onChange={(e: any) => setNewsForm((p: any) => ({ ...(p ?? {}), imageUrl: e?.target?.value ?? '' }))}
                  className="w-full px-4 py-3 rounded-lg border bg-background text-sm" placeholder="URL de imagen (opcional)"
                />
                <div className="flex gap-3">
                  <button onClick={handleCreateNews} disabled={saving} className="px-5 py-2.5 bg-foro-pink text-white text-sm font-semibold rounded-full hover:bg-foro-pink-dark disabled:opacity-50 flex items-center gap-2">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Publicar
                  </button>
                  <button onClick={() => setShowNewsForm(false)} className="px-5 py-2.5 bg-muted text-sm rounded-full">Cancelar</button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {(news ?? []).map((item: any) => (
                <div key={item?.id} className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item?.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {item?.createdAt ? new Date(item.createdAt).toLocaleDateString('es-MX') : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Participants tab */}
        {tab === 'participants' && (
          <div className="space-y-3">
            {(participants ?? []).map((p: any) => (
              <div key={p?.id} className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{p?.fullName}</h3>
                    <p className="text-sm text-muted-foreground">{p?.email} • {p?.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">Tipo: {p?.participantType} • Eje: {p?.thematicAxis}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {p?.createdAt ? new Date(p.createdAt).toLocaleDateString('es-MX') : ''}
                  </span>
                </div>
              </div>
            ))}
            {(participants?.length ?? 0) === 0 && <p className="text-center text-muted-foreground py-10">No hay registros aún.</p>}
          </div>
        )}

        {/* Submissions tab */}
        {tab === 'submissions' && (
          <div className="space-y-3">
            {(submissions ?? []).map((s: any) => (
              <div key={s?.id} className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold">{s?.title}</h3>
                <p className="text-sm text-muted-foreground">{s?.authorName} • {s?.authorInstitution}</p>
                <p className="text-xs text-muted-foreground mt-1">Eje: {s?.thematicAxis} • Estado: {s?.status} • {s?.fileName}</p>
              </div>
            ))}
            {(submissions?.length ?? 0) === 0 && <p className="text-center text-muted-foreground py-10">No hay ponencias aún.</p>}
          </div>
        )}

        {/* Contacts tab */}
        {tab === 'contacts' && (
          <div className="space-y-3">
            {(contacts ?? []).map((c: any) => (
              <div key={c?.id} className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold">{c?.subject}</h3>
                <p className="text-sm text-muted-foreground">{c?.name} • {c?.email}</p>
                <p className="text-sm mt-2">{c?.message}</p>
              </div>
            ))}
            {(contacts?.length ?? 0) === 0 && <p className="text-center text-muted-foreground py-10">No hay mensajes aún.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
