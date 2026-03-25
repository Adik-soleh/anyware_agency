'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { portfolioItems } from '@/data/portfolio';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioDetailPage() {
  const params = useParams();
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-lt-dark mb-4">Proyek tidak ditemukan</h1>
          <Link href="/portfolio" className="text-lt-green font-semibold hover:underline">
            ← Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-lt-green transition-colors mb-8">
            <ArrowLeft size={18} /> Kembali ke Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[2rem] overflow-hidden mb-8 aspect-[16/9] relative bg-gradient-to-br from-lt-pastel to-gray-200">
            <Image
              src={item?.image}
              alt={item?.title}
              fill
              className="object-cover"
            />
          </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-lt-dark mb-4">
              {item.title}
            </h1>
            <div className="flex gap-2 flex-wrap mb-6">
              {item.tags.map((tag) => (
                <Badge key={tag} className="text-sm">{tag}</Badge>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-lt-dark mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-pastel-pink rounded-[2rem] p-6 md:p-8">
                <h3 className="text-xl font-bold text-lt-dark mb-3">🔴 Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{item.challenge}</p>
              </div>
              <div className="bg-pastel-green rounded-[2rem] p-6 md:p-8">
                <h3 className="text-xl font-bold text-lt-dark mb-3">🟢 Solution</h3>
                <p className="text-gray-600 leading-relaxed">{item.solution}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-lt-dark mb-6">Galeri</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-[1.5rem] aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-lt-pastel to-gray-200"
                  >
                    <Image
                      src={img}
                      alt={`gallery-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-lt-dark mb-6">Hasil & Impact</h2>
              <div className="grid grid-cols-3 gap-4">
                {item.results.map((result) => (
                  <div key={result.label} className="bg-lt-pastel rounded-[1.5rem] p-6 text-center">
                    <div className="text-2xl md:text-3xl font-extrabold text-lt-green mb-1">
                      {result.value}
                    </div>
                    <div className="text-gray-500 text-sm">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-lt-green/10 to-lt-purple/10 rounded-[2rem] p-8 md:p-12 text-center mb-16">
              <h3 className="text-2xl font-bold text-lt-dark mb-3">
                Tertarik membuat proyek serupa?
              </h3>
              <p className="text-gray-500 mb-6">
                Mari diskusikan ide Anda bersama tim kami.
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Mulai Proyek Anda →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
