'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { hyperspeedPresets } from '@/components/ui/Hyperspeed';

// next/dynamic dengan ssr:false — satu-satunya cara agar Three.js tidak crash di server
const Hyperspeed = dynamic(() => import('@/components/ui/Hyperspeed'), { ssr: false });

const heroVariants = [
  'that converts.',
  'that scales.',
  'you deserve.',
  'that performs.',
  'that lasts.',
];

const metrics = [
  { value: '12+',  label: 'Projects' },
  { value: '3',    label: 'Industries' },
  { value: '100%', label: 'On-Time' },
];

export default function Hero() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [typedText, setTypedText]       = useState('');
  const [isDeleting, setIsDeleting]     = useState(false);

  useEffect(() => {
    const currentText = heroVariants[variantIndex];
    if (!isDeleting && typedText === currentText) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setVariantIndex((p) => (p + 1) % heroVariants.length);
      return;
    }
    const speed = isDeleting ? 40 : 75;
    const next = isDeleting
      ? currentText.slice(0, typedText.length - 1)
      : currentText.slice(0, typedText.length + 1);
    const t = setTimeout(() => setTypedText(next), speed);
    return () => clearTimeout(t);
  }, [typedText, isDeleting, variantIndex]);

  return (
    <section className="relative min-h-screen flex items-end sticky top-0 overflow-hidden bg-[#000000]">

      {/* ══ Hyperspeed canvas — full cover, NO overlay masking it ══ */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedPresets.three} />
      </div>

      {/* ══ Sangat tipis hanya di sudut kiri bawah supaya teks terbaca ══ */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '70%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, transparent 100%)',
        }}
      />
      {/* Left edge vignette — hanya untuk zone teks, tidak cover seluruh layar */}
      <div
        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
        style={{
          width: '55%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.50) 0%, transparent 100%)',
        }}
      />

      {/* ══ Content — anchor ke bawah (items-end) supaya road cahaya muncul di tengah-atas ══ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 pb-14 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6E23B] animate-pulse" />
            <span className="font-body text-xs font-semibold text-white/70 tracking-widest uppercase">
              Digital Agency · Indonesia
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-tighter text-white mb-6">
            We build websites<br />
            <span className="text-[#C6E23B]">
              <span aria-live="polite">{typedText || '\u00A0'}</span>
              <span
                className="inline-block w-[0.07em] h-[0.85em] ml-1 align-[-0.06em] bg-[#C6E23B] animate-pulse"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Sub */}
          <p className="font-body text-white/65 text-base md:text-lg max-w-md leading-relaxed mb-8">
            Speed-obsessed engineering. Conversion-first design.<br />
            Built for the brands that mean business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#C6E23B] text-[#080E0C] px-8 py-4 rounded-full font-heading font-bold text-base tracking-tight hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(198,226,59,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap min-w-[180px]"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-body font-semibold text-base hover:border-white/60 hover:bg-white/8 transition-all duration-300 whitespace-nowrap min-w-[160px]"
            >
              See Our Work
            </Link>
          </div>

          {/* Metrics */}
          <div className="flex items-center">
            {metrics.map(({ value, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="w-px h-7 bg-white/15 mx-5" />}
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-extrabold text-[#C6E23B] leading-none">{value}</span>
                  <span className="font-body text-[10px] text-white/40 font-semibold uppercase tracking-widest mt-1">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hold to speed up hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-2 select-none pointer-events-none"
      >
        <span className="font-body text-[10px] text-white/25 uppercase tracking-widest">Hold to hyperspeed</span>
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </motion.div>
    </section>
  );
}