'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Zap, Eye, Heart } from 'lucide-react';
import TeamGrid from '@/components/sections/TeamGrid';
import MidCTA from '@/components/sections/MidCTA';

// ─── Values data ───────────────────────────────────────────────────────────────
const values = [
  {
    number: '01',
    title: 'Hasil dulu, estetika mengikuti.',
    body: 'Website yang cantik tapi tidak menghasilkan bukan prestasi — itu pemborosan. Setiap keputusan desain harus bisa dipertanggungjawabkan secara bisnis.',
    Icon: Target,
  },
  {
    number: '02',
    title: 'Teknologi bukan tujuan, tapi alat.',
    body: 'Kami pilih stack yang tepat untuk kebutuhan Anda, bukan yang sekadar sedang tren. Problem-first, tool-second.',
    Icon: Zap,
  },
  {
    number: '03',
    title: 'Transparan dari hari pertama.',
    body: 'Harga jelas. Scope jelas. Timeline jelas. Tidak ada biaya kejutan atau scope creep di tengah jalan.',
    Icon: Eye,
  },
  {
    number: '04',
    title: 'Selesai bukan berarti selamat tinggal.',
    body: 'Kami tetap ada setelah launch — untuk maintenance, pembaruan, dan pertumbuhan bisnis Anda jangka panjang.',
    Icon: Heart,
  },
];

const valuePalette = [
  { bg: '#1E3932', border: 'transparent', text: '#FAFAF8', sub: 'rgba(250,250,248,0.6)', num: '#C6E23B', iconBg: 'rgba(198,226,59,0.15)', iconColor: '#C6E23B' },
  { bg: '#F8F9F4', border: '#D8DDD5',     text: '#080E0C', sub: '#6B7471',               num: '#1E3932', iconBg: '#E4E8DD',                 iconColor: '#1E3932' },
  { bg: '#C6E23B', border: 'transparent', text: '#080E0C', sub: 'rgba(8,14,12,0.6)',     num: '#1E3932', iconBg: 'rgba(30,57,50,0.12)',      iconColor: '#1E3932' },
  { bg: '#080E0C', border: 'transparent', text: '#FAFAF8', sub: 'rgba(250,250,248,0.5)', num: '#C6E23B', iconBg: 'rgba(198,226,59,0.1)',     iconColor: '#C6E23B' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ══ 1. Hero ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#080E0C] pt-40 pb-28 px-6 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#1E3932]/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#C6E23B]/6 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] text-white/30 mb-6">
              Who We Are
            </span>
            <h1 className="font-heading text-[clamp(3.5rem,8vw,7rem)] font-extrabold text-white leading-[1] tracking-tighter mb-8 max-w-4xl">
              We&apos;re a studio that<br />
              <span className="text-[#C6E23B]">builds for outcomes.</span>
            </h1>
            <p className="font-body text-white/55 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
              Lunatic Foundry adalah digital agency berbasis di Indonesia yang mengkhususkan diri dalam membangun produk digital yang konversi — bukan sekadar yang terlihat bagus.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Est.', value: '2023' },
                { label: 'Location', value: 'Indonesia 🇮🇩' },
                { label: 'Specialty', value: 'Web · Mobile · Design' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2"
                >
                  <span className="font-body text-xs text-white/35 uppercase tracking-wider">{label}</span>
                  <span className="font-body text-sm font-semibold text-white/80">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. Vision & Mission ════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[#F8F9F4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471] mb-5">
              Visi Kami
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080E0C] leading-[1.05] tracking-tighter mb-6">
              Membangun kehadiran digital yang jernih, kuat, dan layak dipercaya.
            </h2>
            <p className="font-body text-[#6B7471] text-base md:text-lg leading-relaxed">
              Kami percaya website dan produk digital bukan sekadar pelengkap bisnis. Ia adalah wajah, sistem, dan pengalaman yang menentukan bagaimana sebuah brand dinilai hari ini dan dipilih esok hari.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-[#1E3932] rounded-card3 p-10 md:p-12"
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
              Misi Kami
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Merancang solusi digital yang sederhana untuk digunakan, presisi untuk dijalankan, dan siap bertumbuh bersama bisnis Anda.
            </h3>
            <p className="font-body text-white/55 text-base leading-relaxed mb-10">
              Dari strategi, desain, hingga pengembangan, setiap keputusan dibuat untuk menghadirkan hasil nyata: performa cepat, pesan jelas, dan pengalaman yang matang di setiap titik interaksi.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-body font-semibold text-sm text-[#C6E23B] hover:gap-3 transition-all"
            >
              Mulai percakapan <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ 3. Values ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471] mb-4">
                Yang Kami Percaya
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#080E0C] tracking-tighter leading-[1]">
                Our Values.
              </h2>
            </div>
            <p className="font-body text-[#6B7471] text-base max-w-xs leading-relaxed">
              Prinsip yang tidak pernah kami kompromikan, bahkan saat deadline mendekat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => {
              const c = valuePalette[i];
              return (
                <motion.div
                  key={v.number}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                  className="h-full"
                >
                  <div
                    className="h-full rounded-card3 p-8 md:p-10 flex flex-col gap-5 relative overflow-hidden"
                    style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
                  >
                    {/* Watermark */}
                    <span
                      className="absolute -bottom-4 -right-2 font-heading text-[120px] font-extrabold leading-none select-none pointer-events-none"
                      style={{ color: c.num, opacity: 0.06 }}
                      aria-hidden="true"
                    >
                      {v.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: c.iconBg }}
                    >
                      <v.Icon size={20} style={{ color: c.iconColor }} />
                    </div>

                    <h3
                      className="font-heading text-2xl md:text-3xl font-bold tracking-tight leading-tight"
                      style={{ color: c.text }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed flex-grow"
                      style={{ color: c.sub }}
                    >
                      {v.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. Team ════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[#F8F9F4]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471] mb-4">
                Our Team
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#080E0C] tracking-tighter leading-[1]">
                The people<br />behind the work.
              </h2>
            </div>
            <p className="font-body text-[#6B7471] text-base max-w-xs leading-relaxed">
              Orang-orang di balik layar yang memastikan setiap kode dan desain sempurna.
            </p>
          </motion.div>

          <TeamGrid />
        </div>
      </section>

      {/* ══ 5. CTA ═════════════════════════════════════════════════════════════ */}
      <MidCTA />
    </div>
  );
}