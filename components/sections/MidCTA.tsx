'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section className="py-20 md:py-24 px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative rounded-card3 bg-[#080E0C] overflow-hidden px-10 py-16 md:px-20 md:py-20">
          {/* Decorative glows */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#1E3932]/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-[400px] h-[400px] bg-[#C6E23B]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* ── Copy ── */}
            <div className="max-w-xl">
              <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-white/35 mb-6">
                Ready to start?
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-white tracking-tighter leading-[1] mb-5">
                Jumpstart your<br />
                <span className="text-[#C6E23B]">digital future</span> today.
              </h2>
              <p className="font-body text-white/55 text-base md:text-lg leading-relaxed max-w-sm">
                One conversation is all it takes. Tell us what you&apos;re building — we&apos;ll make it exceptional.
              </p>
            </div>

            {/* ── Actions ── */}
            <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#C6E23B] text-[#080E0C] px-8 py-4 rounded-full font-heading font-bold text-sm tracking-tight hover:-translate-y-0.5 hover:shadow-lime transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/12 text-white/70 px-8 py-4 rounded-full font-body font-medium text-sm hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
