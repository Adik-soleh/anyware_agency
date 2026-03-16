'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Proyek Selesai' },
  { value: 99, suffix: '%', label: 'Klien Puas' },
  { value: 24, suffix: 'h', label: 'Response Time' },
  { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const stepTime = duration / value;
          const timer = setInterval(() => {
            start++;
            setCount(start);
            if (start >= value) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-lt-dark">
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section id="stats" className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-gray-100 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
