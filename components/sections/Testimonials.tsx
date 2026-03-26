'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/team';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#080E0C] scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
              Client Stories
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tighter leading-[1]">
              What our <br className="hidden md:block" />
              <span className="text-[#C6E23B]">clients say.</span>
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-body text-sm text-white/30 min-w-[2.5rem] text-center">
              <span className="text-white">{current + 1}</span>/{testimonials.length}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* ── Quote card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-card3 bg-[#111714] border border-white/6 p-10 md:p-14"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#C6E23B] text-lg">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.3] tracking-tight mb-10 max-w-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar initials */}
              <div className="w-12 h-12 rounded-full bg-[#1E3932] flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-lg text-[#C6E23B]">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                <p className="font-body text-white/40 text-xs mt-0.5 uppercase tracking-wider">{t.role} · {t.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Dot indicators ── */}
        <div className="flex items-center gap-2 mt-8 justify-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 bg-[#C6E23B]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}