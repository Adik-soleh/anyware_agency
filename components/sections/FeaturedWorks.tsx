'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';

export default function FeaturedWorks() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#F8F9F4] scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471] mb-4">
              Selected Work
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#080E0C] tracking-tighter leading-[1]">
              What We Can Build.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 bg-[#080E0C] text-white px-6 py-3.5 rounded-full font-body font-semibold text-sm hover:-translate-y-0.5 hover:shadow-forest transition-all duration-300 active:scale-95 self-start md:self-auto whitespace-nowrap"
          >
            All Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

          {/* Left: two stacked cards */}
          <div className="flex flex-col gap-4">
            {featured.slice(0, 2).map((item, i) => {
              const isDark = i === 1;
              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                >
                  <Link href={`/portfolio/${item.slug}`} className="group block">
                    <div
                      className="rounded-card3 p-8 md:p-10 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-card-hover"
                      style={{ backgroundColor: isDark ? '#1E3932' : '#C6E23B' }}
                    >
                      <span
                        className="text-[10px] font-body font-bold uppercase tracking-[0.2em]"
                        style={{ color: isDark ? 'rgba(250,250,248,0.4)' : 'rgba(8,14,12,0.45)' }}
                      >
                        Featured Project
                      </span>
                      <h3
                        className="font-heading text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ color: isDark ? '#FAFAF8' : '#080E0C' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-relaxed line-clamp-2"
                        style={{ color: isDark ? 'rgba(250,250,248,0.6)' : 'rgba(8,14,12,0.6)' }}
                      >
                        {item.description}
                      </p>
                      <div
                        className="inline-flex items-center gap-2 text-sm font-body font-semibold group-hover:gap-3 transition-all"
                        style={{ color: isDark ? '#C6E23B' : '#1E3932' }}
                      >
                        View Project <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right: single tall card */}
          {featured.slice(2, 3).map((item) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.01, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="h-full"
            >
              <Link href={`/portfolio/${item.slug}`} className="group block h-full">
                <div className="rounded-card3 p-10 md:p-12 min-h-[480px] md:min-h-full flex flex-col justify-between bg-[#080E0C] transition-shadow duration-300 hover:shadow-card-hover relative overflow-hidden">
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#C6E23B]/8 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6E23B] animate-pulse" />
                      Most Recent
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-[0.95] mb-5">
                      {item.title}
                    </h3>
                    <p className="font-body text-white/55 text-base leading-relaxed mb-8 max-w-sm">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 font-body font-bold text-sm text-[#C6E23B] group-hover:gap-3.5 transition-all">
                      VIEW CASE STUDY <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}