'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { Icon: MapPin, label: 'Location',  value: 'Tangerang Selatan, Indonesia 🇮🇩' },
  { Icon: Phone,  label: 'WhatsApp',  value: '+62 851-5528-4634' },
  { Icon: Mail,   label: 'Email',     value: 'rivaldi1603@outlook.com' },
];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter,   label: 'Twitter',   href: '#' },
  { Icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { Icon: Github,    label: 'GitHub',    href: '#' },
];

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name    = String(fd.get('name')    || '').trim();
    const email   = String(fd.get('email')   || '').trim();
    const subject = String(fd.get('subject') || '').trim();
    const message = String(fd.get('message') || '').trim();
    const text = [
      'Halo Lunatic Foundry, saya ingin konsultasi.',
      '',
      `Nama: ${name}`,
      `Email: ${email}`,
      `Subjek: ${subject}`,
      `Pesan: ${message}`,
    ].join('\n');
    setTimeout(() => {
      window.open(`https://wa.me/6285155284634?text=${encodeURIComponent(text)}`, '_blank');
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const fieldBase = "w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C6E23B]/60 focus:bg-white/8 transition-all duration-200";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-16 h-16 rounded-full bg-[#C6E23B]/15 flex items-center justify-center mb-6">
          <Send size={28} className="text-[#C6E23B]" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-3">Pesan Terkirim!</h3>
        <p className="font-body text-white/50 text-sm">Kami akan menghubungi Anda dalam 24 jam.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs font-body text-white/30 hover:text-white/60 transition-colors"
        >
          Kirim pesan lain →
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/35">Nama</label>
          <input name="name" required placeholder="Nama lengkap" className={fieldBase} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/35">Email</label>
          <input name="email" type="email" required placeholder="email@example.com" className={fieldBase} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/35">Subjek</label>
        <input name="subject" required placeholder="Apa yang bisa kami bantu?" className={fieldBase} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-body text-[11px] font-bold uppercase tracking-wider text-white/35">Pesan</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Ceritakan tentang proyek Anda..."
          className={`${fieldBase} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2.5 bg-[#C6E23B] text-[#080E0C] rounded-full px-8 py-4 font-heading font-bold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(198,226,59,0.35)] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Mengirim...
          </>
        ) : (
          <>
            <Send size={16} /> Kirim Pesan via WhatsApp
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#080E0C] min-h-screen">

      {/* ══ Single dark page — no section breaks needed ══ */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1E3932]/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#C6E23B]/6 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] text-white/30 mb-6">
              Get in Touch
            </span>
            <h1 className="font-heading text-[clamp(3rem,7vw,6.5rem)] font-extrabold text-white leading-[1] tracking-tighter mb-6">
              Let&apos;s build<br />
              <span className="text-[#C6E23B]">something great.</span>
            </h1>
            <p className="font-body text-white/50 text-lg max-w-md leading-relaxed">
              Satu percakapan adalah semua yang diperlukan. Ceritakan apa yang sedang Anda bangun.
            </p>
          </motion.div>

          {/* ── 2-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6">

            {/* Left: info card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111714] border border-white/6 rounded-card3 p-8 md:p-10 flex flex-col gap-8"
            >
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-1">Informasi Kontak</h2>
                <p className="font-body text-sm text-white/40">Kami merespons dalam waktu 24 jam.</p>
              </div>

              <div className="flex flex-col gap-5">
                {contactInfo.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#C6E23B]" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">{label}</p>
                      <p className="font-body text-sm text-white/75">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/6">
                <p className="font-body text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Temukan Kami</p>
                <div className="flex gap-2">
                  {socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-auto flex items-center gap-2 bg-[#1E3932]/50 border border-[#C6E23B]/15 rounded-2xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-[#C6E23B] animate-pulse" />
                <span className="font-body text-xs text-white/60">Biasanya kami merespons dalam <strong className="text-white">1–4 jam</strong></span>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111714] border border-white/6 rounded-card3 p-8 md:p-10"
            >
              <h2 className="font-heading text-xl font-bold text-white mb-1">Kirim Pesan</h2>
              <p className="font-body text-sm text-white/40 mb-8">Isi form berikut dan kami akan membalas via WhatsApp.</p>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
