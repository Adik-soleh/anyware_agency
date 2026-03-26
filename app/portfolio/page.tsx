'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import MidCTA from '@/components/sections/MidCTA';

type Category = 'all' | 'web' | 'mobile' | 'design';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
];

// Alternate palette per card row
const cardPalette = [
  { bg: '#1E3932', text: '#FAFAF8', sub: 'rgba(250,250,248,0.58)', tag: 'rgba(198,226,59,0.15)', tagText: '#C6E23B', arrow: '#C6E23B' },
  { bg: '#F8F9F4', text: '#080E0C', sub: '#6B7471', tag: '#E4E8DD', tagText: '#1E3932', arrow: '#1E3932' },
  { bg: '#C6E23B', text: '#080E0C', sub: 'rgba(8,14,12,0.6)', tag: 'rgba(30,57,50,0.1)', tagText: '#1E3932', arrow: '#1E3932' },
  { bg: '#080E0C', text: '#FAFAF8', sub: 'rgba(250,250,248,0.5)', tag: 'rgba(198,226,59,0.1)', tagText: '#C6E23B', arrow: '#C6E23B' },
  { bg: '#1E3932', text: '#FAFAF8', sub: 'rgba(250,250,248,0.58)', tag: 'rgba(198,226,59,0.15)', tagText: '#C6E23B', arrow: '#C6E23B' },
  { bg: '#F8F9F4', text: '#080E0C', sub: '#6B7471', tag: '#E4E8DD', tagText: '#1E3932', arrow: '#1E3932' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === active);

  return (
    <div className="bg-[#F8F9F4] min-h-screen">

      {/* ══ Hero ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#080E0C] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1E3932]/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-[#C6E23B]/6 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] text-white/30 mb-6">
              Selected Work
            </span>
            <h1 className="font-heading text-[clamp(3rem,7vw,6.5rem)] font-extrabold text-white leading-[1] tracking-tighter mb-8 max-w-4xl">
              Work that<br />
              <span className="text-[#C6E23B]">speaks for itself.</span>
            </h1>
            <p className="font-body text-white/55 text-lg md:text-xl max-w-xl leading-relaxed">
              Setiap proyek adalah bukti bahwa desain yang baik dan engineering yang solid bisa berjalan beriringan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ Filter tabs ════════════════════════════════════════════════════════ */}
      <div className="sticky top-[72px] z-30 bg-[#F8F9F4]/90 backdrop-blur-md border-b border-[#E4E8DD] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-5 py-2 rounded-full text-[13px] font-body font-semibold whitespace-nowrap transition-all duration-200 ${active === cat.value
                  ? 'bg-[#080E0C] text-white'
                  : 'bg-white border border-[#E4E8DD] text-[#6B7471] hover:border-[#1E3932]/30 hover:text-[#080E0C]'
                }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto font-body text-xs text-[#6B7471] shrink-0">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ══ Grid ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const c = cardPalette[i % cardPalette.length];
                return (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                    className="h-full"
                  >
                    <Link href={`/portfolio/${item.slug}`} className="group block h-full">
                      <div
                        className="rounded-card3 p-8 md:p-10 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
                        style={{ backgroundColor: c.bg }}
                      >
                        {/* Top: category + arrow */}
                        <div className="flex items-center justify-between mb-8">
                          <span
                            className="text-[10px] font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: c.tag, color: c.tagText }}
                          >
                            {item.category}
                          </span>
                          <div
                            className="w-9 h-9 rounded-full border flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            style={{ borderColor: c.arrow, color: c.arrow }}
                          >
                            <ArrowUpRight size={16} />
                          </div>
                        </div>

                        {/* Main content */}
                        <div>
                          <h2
                            className="font-heading text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3"
                            style={{ color: c.text }}
                          >
                            {item.title}
                          </h2>
                          <p
                            className="font-body text-sm leading-relaxed line-clamp-2 mb-6"
                            style={{ color: c.sub }}
                          >
                            {item.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-xs font-body font-semibold px-2.5 py-1 rounded-full"
                                style={{ backgroundColor: c.tag, color: c.tagText }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-body text-[#6B7471]">Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      <MidCTA />
    </div>
  );
}