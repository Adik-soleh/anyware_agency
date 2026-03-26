'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';
import { Palette, Smartphone, Globe, Lightbulb, ArrowRight, Check } from 'lucide-react';
import MidCTA from '@/components/sections/MidCTA';

const iconMap: Record<string, React.ElementType> = { Palette, Smartphone, Globe, Lightbulb };

const palette = [
  { bg: '#1E3932', border: 'transparent', icon: '#C6E23B', iconBg: 'rgba(198,226,59,0.15)', text: '#FAFAF8', sub: 'rgba(250,250,248,0.58)', tag: 'rgba(198,226,59,0.15)', tagText: '#C6E23B' },
  { bg: '#F8F9F4', border: '#D8DDD5', icon: '#1E3932', iconBg: '#E4E8DD', text: '#080E0C', sub: '#6B7471', tag: '#E4E8DD', tagText: '#1E3932' },
  { bg: '#C6E23B', border: 'transparent', icon: '#1E3932', iconBg: 'rgba(30,57,50,0.12)', text: '#080E0C', sub: 'rgba(8,14,12,0.6)', tag: 'rgba(30,57,50,0.1)', tagText: '#1E3932' },
  { bg: '#080E0C', border: 'transparent', icon: '#C6E23B', iconBg: 'rgba(198,226,59,0.1)', text: '#FAFAF8', sub: 'rgba(250,250,248,0.5)', tag: 'rgba(198,226,59,0.1)', tagText: '#C6E23B' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ══ Hero ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#080E0C] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#1E3932]/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#C6E23B]/6 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] text-white/30 mb-6">
              What We Offer
            </span>
            <h1 className="font-heading text-[clamp(3rem,7vw,6.5rem)] font-extrabold text-white leading-[1] tracking-tighter mb-8 max-w-4xl">
              End-to-end digital<br />
              <span className="text-[#C6E23B]">solutions.</span>
            </h1>
            <p className="font-body text-white/55 text-lg md:text-xl max-w-xl leading-relaxed">
              Dari riset pengguna hingga deployment — kami tangani setiap layer dengan presisi dan perhatian penuh terhadap detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ Services Grid ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[#F8F9F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              const c = palette[i % palette.length];
              return (
                <motion.div
                  key={service.slug}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                  className="h-full"
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div
                      className="h-full rounded-card3 p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden transition-shadow duration-300 hover:shadow-card-hover"
                      style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
                    >
                      {/* Watermark number */}
                      <span
                        className="absolute -bottom-4 -right-2 font-heading text-[120px] font-extrabold leading-none select-none pointer-events-none"
                        style={{ color: c.icon, opacity: 0.06 }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: c.iconBg }}>
                        <Icon size={22} style={{ color: c.icon }} />
                      </div>

                      {/* Title + desc */}
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ color: c.text }}>{service.title}</h2>
                        <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: c.sub }}>{service.description}</p>
                      </div>

                      {/* Features */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 flex-grow">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check size={13} className="mt-[3px] shrink-0" style={{ color: c.icon }} />
                            <span className="font-body text-xs leading-snug" style={{ color: c.sub }}>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: `${c.icon}18` }}>
                        {service.tools.map((t) => (
                          <span key={t} className="text-xs font-body font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: c.tag, color: c.tagText }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 text-sm font-body font-semibold group-hover:gap-3 transition-all" style={{ color: c.icon === '#1E3932' ? c.icon : c.icon }}>
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <MidCTA />
    </div>
  );
}