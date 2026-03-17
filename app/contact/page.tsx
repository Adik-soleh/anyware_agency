'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/sections/ContactForm';
import SocialLinks from '@/components/sections/SocialLinks';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-lt-pastel to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-lt-dark mb-6">
              Hubungi Kami
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Mari bicara tentang proyek Anda. Kami siap membantu mewujudkan ide brilian Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-lt-pastel rounded-[2rem] p-6 md:p-8 space-y-5"
            >
              <h3 className="text-lg font-bold text-lt-dark mb-4">Informasi Kontak</h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-lt-green" />
                </div>
                <div>
                  <p className="font-semibold text-lt-dark text-sm">Alamat</p>
                  <p className="text-gray-500 text-sm">Tangerang Selatan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-lt-green" />
                </div>
                <div>
                  <p className="font-semibold text-lt-dark text-sm">Telepon</p>
                  <p className="text-gray-500 text-sm">+62 851-5528-4634</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-lt-green" />
                </div>
                <div>
                  <p className="font-semibold text-lt-dark text-sm">Email</p>
                  <p className="text-gray-500 text-sm">rivaldi1603@outlook.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden h-[300px] md:h-[400px] bg-lt-pastel flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 font-semibold">Google Maps Embed</p>
              <p className="text-gray-300 text-sm">Jakarta Selatan, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
