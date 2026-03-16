'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/team';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 bg-[#1A56DB] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, rotateY: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 20, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* Card Utama (Floating) */}
              <div className="w-64 h-80 md:w-72 md:h-96 bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white/20 transform -rotate-6">
                <div className="h-2/3 bg-gray-200 relative">
                  {/* Inisial Nama Besar */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-[#1A56DB]/20">
                    {testimonials[current].name.charAt(0)}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-black text-[#1A56DB] text-xl leading-tight">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                    {testimonials[current].company}
                  </p>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-[#C6E23B] rounded-3xl flex items-center justify-center text-3xl shadow-xl rotate-12"
              >
                ⭐
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-5 -left-12 w-32 h-32 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hidden md:flex"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#C6E23B] text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 italic">
              What our <br /> clients say
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="min-h-[200px]"
              >
                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 opacity-90">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#C6E23B]" />
                  <p className="text-[#C6E23B] font-black uppercase tracking-widest text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6 mt-12">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A56DB] transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A56DB] transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="text-white/40 font-black text-sm">
                <span className="text-white">{current + 1}</span> / {testimonials.length}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}