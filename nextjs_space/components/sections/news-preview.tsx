'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Newspaper } from 'lucide-react';

export function NewsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data: any) => setNews(Array.isArray(data) ? data?.slice(0, 3) : []))
      .catch(() => setNews([]));
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-foro-cream dark:bg-gray-950" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="text-foro-pink font-semibold tracking-widest uppercase text-xs mb-3">Noticias</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Actualizaciones</h2>
          </div>
          <Link href="/noticias" className="hidden sm:flex items-center gap-2 text-foro-pink font-semibold text-sm hover:underline">
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {(news?.length ?? 0) === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>Próximamente publicaremos novedades sobre el foro.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news?.map((item: any, i: number) => (
              <motion.div
                key={item?.id ?? i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {item?.imageUrl && (
                  <div className="relative h-48 bg-[#f5f3ee]">
                    <Image
                      src={item.imageUrl}
                      alt={item?.title ?? 'Noticia'}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2 line-clamp-2 group-hover:text-foro-pink transition-colors">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{item?.excerpt}</p>
                  <span className="text-xs text-muted-foreground">
                    {item?.createdAt ? new Date(item.createdAt).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <Link href="/noticias" className="sm:hidden flex items-center justify-center gap-2 text-foro-pink font-semibold text-sm mt-8 hover:underline">
          Ver todas las noticias <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
