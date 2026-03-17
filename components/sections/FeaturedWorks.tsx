'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';

const cardStyles = [
  { bg: 'bg-[#E9C3E6]', text: 'text-[#1E3932]', glow: 'hover:shadow-[0_0_40px_rgba(233,195,230,0.6)]' }, // Pink
  { bg: 'bg-[#C6E23B]', text: 'text-[#1E3932]', glow: 'hover:shadow-[0_0_40px_rgba(198,226,59,0.6)]' }, // Lime
  { bg: 'bg-[#001489]', text: 'text-white', glow: 'hover:shadow-[0_0_50px_rgba(0,20,137,0.4)]' },      // Deep Blue
];

export default function FeaturedWorks() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 md:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-lt-dark mb-4 tracking-tighter break-words">
            What We Can Build.
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl">
            Beberapa proyek terbaik yang telah kami hasilkan.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

          <div className="flex flex-col gap-6">
            {featured.slice(0, 2).map((item, i) => {
              const style = cardStyles[i];
              return (
                <motion.div
                  key={item.slug}
                  whileHover={{ y: -8 }}
                  className="flex-1"
                >
                  <Link href={`/portfolio/${item.slug}`} className="block h-full">
                    <div className={`${style.bg} ${style.glow} rounded-[40px] p-8 md:p-10 h-full flex flex-col justify-between transition-all duration-500 group relative overflow-hidden`}>
                      <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">Featured Project</span>
                        <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight ${style.text}`}>
                          {item.title}
                        </h3>
                      </div>
                      <p className={`text-sm md:text-base font-medium opacity-70 leading-relaxed line-clamp-2 ${style.text}`}>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {featured.slice(2, 3).map((item) => {
            const style = cardStyles[2];
            return (
              <motion.div
                key={item.slug}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link href={`/portfolio/${item.slug}`} className="block h-full">
                  <div className={`${style.bg} ${style.glow} rounded-[48px] p-10 md:p-12 h-full flex flex-col min-h-[500px] md:min-h-full transition-all duration-500 group relative overflow-hidden`}>

                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="mb-auto relative z-10">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                        Most Recent
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-sm font-medium">
                        {item.description}
                      </p>
                      <div className="text-white font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                        VIEW FULL CASE STUDY <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="text-[#1E3932] font-black border-b-4 border-[#C6E23B] hover:text-[#C6E23B] transition-colors text-xl tracking-tight"
          >
            Lihat Semua Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}