'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { Palette, Smartphone, Globe, Lightbulb, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Smartphone,
  Globe,
  Lightbulb,
};

const styleConfig = [
  { bg: 'bg-[#E9C3E6]', text: 'text-[#2D2D2D]', glow: 'hover:shadow-[0_0_40px_rgba(233,195,230,0.6)]' }, // Pink
  { bg: 'bg-[#C6E23B]', text: 'text-[#2D2D2D]', glow: 'hover:shadow-[0_0_40px_rgba(198,226,59,0.6)]' }, // Lime
  { bg: 'bg-[#001489]', text: 'text-white', glow: 'hover:shadow-[0_0_50px_rgba(0,20,137,0.5)]' },     // Blue
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-lt-dark mb-4 tracking-tighter">
            Layanan Kami
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Solusi digital menyeluruh untuk kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const style = styleConfig[i % 3];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div
                    className={`h-full p-8 md:p-10 rounded-[40px] transition-all duration-500 group relative overflow-hidden ${style.bg} ${style.glow}`}
                  >
                    {style.text === 'text-white' && (
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                    )}

                    <div className="flex flex-col h-full relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                        <Icon size={28} className={style.text} />
                      </div>

                      <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight ${style.text}`}>
                        {service.title}
                      </h3>

                      <p className={`text-sm md:text-base font-medium opacity-80 leading-relaxed mb-8 flex-grow ${style.text}`}>
                        {service.description}
                      </p>

                      <div className={`flex items-center gap-2 font-bold text-sm transition-all ${style.text}`}>
                        Lihat Detail
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}