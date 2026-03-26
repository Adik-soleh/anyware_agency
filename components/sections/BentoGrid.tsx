'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { Palette, Smartphone, Globe, Lightbulb, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Palette, Smartphone, Globe, Lightbulb };

// Ordered for maximum figure-ground contrast per row:
// Row 1: Forest (dark) ↔ Chalk (light)
// Row 2: Lime (bright) ↔ Ink (dark)
const palette = [
  { bg: '#1E3932', border: 'transparent', icon: '#C6E23B', iconBg: 'rgba(198,226,59,0.15)', text: '#FAFAF8', sub: 'rgba(250,250,248,0.6)', arrow: '#C6E23B' },
  { bg: '#F8F9F4', border: '#D8DDD5', icon: '#1E3932', iconBg: '#E4E8DD', text: '#080E0C', sub: '#6B7471', arrow: '#1E3932' },
  { bg: '#C6E23B', border: 'transparent', icon: '#1E3932', iconBg: 'rgba(30,57,50,0.12)', text: '#080E0C', sub: 'rgba(8,14,12,0.6)', arrow: '#1E3932' },
  { bg: '#080E0C', border: 'transparent', icon: '#C6E23B', iconBg: 'rgba(198,226,59,0.12)', text: '#FAFAF8', sub: 'rgba(250,250,248,0.5)', arrow: '#C6E23B' },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-[#FAFAF8] scroll-mt-24">
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
              What We Do
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#080E0C] tracking-tighter leading-[1]">
              Our Services.
            </h2>
          </div>
          <p className="font-body text-[#6B7471] text-base md:text-lg max-w-sm leading-relaxed">
            End-to-end digital solutions — from strategy to shipping.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {services.map((service, i) => {
            const Icon  = iconMap[service.icon] || Globe;
            const c     = palette[i % palette.length];
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="h-full"
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div
                    className="h-full p-8 md:p-10 rounded-card3 transition-shadow duration-300 hover:shadow-card-hover relative overflow-hidden"
                    style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8"
                      style={{ backgroundColor: c.iconBg }}
                    >
                      <Icon size={22} style={{ color: c.icon }} />
                    </div>

                    {/* Text */}
                    <h3
                      className="font-heading text-2xl md:text-3xl font-bold mb-3 tracking-tight"
                      style={{ color: c.text }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="font-body text-sm md:text-base leading-relaxed mb-8"
                      style={{ color: c.sub }}
                    >
                      {service.description}
                    </p>

                    {/* Arrow CTA */}
                    <div
                      className="inline-flex items-center gap-2 text-sm font-body font-semibold"
                      style={{ color: c.arrow }}
                    >
                      Learn more
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}