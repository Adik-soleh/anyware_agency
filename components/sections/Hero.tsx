'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroVariants = [
  'that converts.',
  'that scales.',
  'you deserve.',
  'that performs.',
  'that lasts.',
  'worth sharing.',
];

type HeroMediaMode = 'cards' | 'video';

interface HeroProps {
  mediaMode?: HeroMediaMode;
  videoSrc?: string;
  videoPoster?: string;
}

export default function Hero({
  mediaMode = 'cards',
  videoSrc = '/hero/hero-showreel.mp4',
  videoPoster = '/og-image.png',
}: HeroProps) {
  const isVideoBackground = mediaMode === 'video';

  const [variantIndex, setVariantIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = heroVariants[variantIndex];

    if (!isDeleting && typedText === currentText) {
      const holdTimer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(holdTimer);
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setVariantIndex((prev) => (prev + 1) % heroVariants.length);
      return;
    }

    const speed = isDeleting ? 45 : 80;
    const nextText = isDeleting
      ? currentText.slice(0, typedText.length - 1)
      : currentText.slice(0, typedText.length + 1);

    const typeTimer = setTimeout(() => setTypedText(nextText), speed);
    return () => clearTimeout(typeTimer);
  }, [typedText, isDeleting, variantIndex]);

  return (
    <section
      className={`min-h-screen flex items-center px-4 sm:px-6 md:px-16 pt-24 pb-16 sticky top-0 overflow-hidden ${
        isVideoBackground ? 'bg-[#10231e]' : 'bg-[#d2e823]'
      }`}
    >
      {isVideoBackground && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,14,12,0.72)_0%,rgba(8,14,12,0.58)_40%,rgba(8,14,12,0.4)_100%)]" />
        </>
      )}

      {!isVideoBackground && (
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/30 rounded-full blur-[120px]" />
      )}

      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 ${isVideoBackground ? '' : 'lg:grid-cols-2'} gap-16 items-center w-full relative z-10`}
      >
    
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 ${isVideoBackground ? 'max-w-4xl' : ''}`}
        >
          <div
            className={`inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 ${
              isVideoBackground ? 'bg-white/15 text-white backdrop-blur-sm' : 'bg-[#1E3932]/10 text-[#1E3932]'
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 0.5V13.5M0.5 7H13.5M2.04 2.04L11.96 11.96M11.96 2.04L2.04 11.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Introducing Lunatic Foundry.
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-[75px] lg:text-[85px] font-black leading-[1.1] md:leading-[0.95] tracking-tighter mb-8 ${
              isVideoBackground ? 'text-white' : 'text-[#1E3932]'
            }`}
          >
            <span className="sm:whitespace-nowrap">We build websites</span> <br />
            <span className={`inline-block min-h-[1.1em] ${isVideoBackground ? 'text-[#d7fca4]' : 'text-white'}`}>
              <span aria-live="polite">{typedText || '\u00A0'}</span>
              <span
                className={`inline-block w-[0.08em] h-[0.9em] ml-1 align-[-0.08em] animate-pulse ${
                  isVideoBackground ? 'bg-[#d7fca4]' : 'bg-white'
                }`}
                aria-hidden="true"
              />
            </span>
          </h1>

          <p
            className={`text-base md:text-xl font-medium max-w-md mb-10 leading-relaxed ${
              isVideoBackground ? 'text-white/85' : 'text-[#1E3932]/80'
            }`}
          >
            Your website, reimagined. Built for speed, designed for impact, engineered to grow with you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="flex-1 px-6 py-4 rounded-2xl bg-white shadow-sm focus:shadow-md transition-all outline-none text-[#1E3932] font-semibold"
            />
            <button className="w-full sm:w-auto shrink-0 bg-[#1E3932] text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:bg-[#2d544a] hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg shadow-[#1E3932]/20">
              Join Now
            </button>
          </div>
        </motion.div>

        {!isVideoBackground && (
          <div className="hidden lg:flex flex-col gap-8 relative h-[600px] justify-center">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[380px] h-[280px] bg-[#FFD1E3] rounded-[48px] ml-auto p-10 shadow-xl border-4 border-white/50 relative z-20"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl">🎨</div>
                <h3 className="text-[#1E3932] text-2xl font-black leading-tight">Stunning Graphic & UI Design</h3>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-[420px] h-[320px] bg-[#1E3932] rounded-[48px] absolute top-1/2 left-0 -translate-y-1/2 p-10 shadow-2xl border-4 border-white/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
              <div className="flex flex-col h-full relative z-10">
                <div className="flex gap-2 mb-auto">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <h3 className="text-white text-3xl font-black leading-tight mb-4">Clean Code, <br />Scalable Tech.</h3>
                <p className="text-white/60 font-mono text-sm">npm install future --save</p>
                <p className="text-white/60 font-mono text-sm mt-3">SELECT *FROM finger
                <br />
                 WHERE id = 3</p>

              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-[350px] h-[220px] bg-[#B2E2F2] rounded-[48px] ml-auto mt-auto p-8 shadow-lg border-4 border-white/50"
            >
              <div className="flex items-center gap-4 h-full">
                <div className="text-4xl">🚀</div>
                <div className="font-black text-[#1E3932] text-xl">Grow your business <br /> 10x faster.</div>
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}