'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, TextArea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const whatsappNumber = '6285155284634';
    const text = [
      'Halo Lunatic Foundry, saya ingin konsultasi.',
      '',
      `Nama: ${name}`,
      `Email: ${email}`,
      `Subjek: ${subject}`,
      `Pesan: ${message}`,
    ].join('\n');

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input name="name" label="Nama" placeholder="Nama lengkap Anda" required />
        <Input name="email" label="Email" type="email" placeholder="email@example.com" required />
      </div>
      <Input name="subject" label="Subject" placeholder="Apa yang bisa kami bantu?" required />
      <TextArea name="message" label="Pesan" placeholder="Ceritakan tentang proyek Anda..." required />
      <Button type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Mengalihkan ke WhatsApp...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={18} /> Kirim Pesan
          </span>
        )}
      </Button>
    </motion.form>
  );
}
