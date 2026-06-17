'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Newspaper, Calendar } from 'lucide-react';

export function NewsList() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data: any) => setNews(Array.isArray(data) ? data : []))
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i: number) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm animate-pulse">
            <div className="aspect-video bg-muted" />
            <div className="p-6 space-y-3">
              <div className="h-5 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if ((news?.length ?? 0) === 0) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-30" />
        <p className="text-lg">Aún no hay noticias publicadas.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news?.map((item: any, i: number) => (
        <motion.article
          key={item?.id ?? i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
        >
          {item?.imageUrl && (
            <div className="relative h-52 bg-[#f5f3ee]">
              <Image
                src={item.imageUrl}
                alt={item?.title ?? 'Noticia'}
                fill
                className="object-contain p-3"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Calendar className="w-3.5 h-3.5" />
              {item?.createdAt ? new Date(item.createdAt).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
            </div>
            <h2 className="font-display text-xl font-bold mb-2 group-hover:text-foro-pink transition-colors">{item?.title}</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item?.excerpt}</p>
            <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{item?.content}</div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
