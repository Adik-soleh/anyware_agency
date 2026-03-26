'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Shipped' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: 'h', label: 'Response Time' },
  { value: 5,  suffix: '+', label: 'Years Building' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const step = duration / value;
          let current = 0;
          const timer = setInterval(() => {
            current++;
            setCount(current);
            if (current >= value) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-extrabold text-[#080E0C] tracking-tighter leading-none">
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section id="stats" className="py-20 md:py-28 px-6 bg-[#F8F9F4] scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471]">
            By the Numbers
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 md:px-10 md:border-r md:last:border-r-0 border-[#E4E8DD] first:pl-0"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="font-body text-sm text-[#6B7471] font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#E4E8DD] to-transparent" />
      </div>
    </section>
  );
}
