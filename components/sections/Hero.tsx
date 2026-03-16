'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 pt-24 pb-16 bg-[#d2e823] relative overflow-hidden">

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
    
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E3932]/10 text-[#1E3932] px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Star size={14} fill="currentColor" />
            New Rated Agency 2026
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[75px] lg:text-[85px] font-black text-[#1E3932] leading-[1.1] md:leading-[0.95] tracking-tighter mb-8">
            Digital solutions <br />
            <span className="text-white drop-shadow-sm">built for you.</span>
          </h1>

          <p className="text-[#1E3932]/80 text-base md:text-xl font-medium max-w-md mb-10 leading-relaxed">
            Membantu bisnis tumbuh lebih cepat dengan website modern dan sistem yang terintegrasi. Simple, cepat, dan berdampak.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md group">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="test@gmail.com"
                className="w-full sm:pl-24 px-6 py-5 rounded-[20px] bg-white shadow-sm focus:shadow-md transition-all outline-none text-[#1E3932] font-semibold"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#1E3932] text-white px-8 py-5 rounded-[20px] font-bold hover:bg-[#2d544a] hover:-translate-y-1 transition-all active:scale-95 shadow-lg shadow-[#1E3932]/20">
              Join Now
            </button>
          </div>
        </motion.div>

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

      </div>
    </section>
  );
}