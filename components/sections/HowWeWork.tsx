'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    headline: 'We listen before we build.',
    body: 'Deep dive into your goals, users, and constraints. Every design decision earns its place — no opinions, only evidence.',
    tags: ['Kickoff Call', 'User Research', 'Scope Definition'],
    bg: '#F8F9F4',
    border: '#E4E8DD',
    text: '#080E0C',
    sub: '#6B7471',
    numColor: '#1E3932',
    tagBg: '#E4E8DD',
    tagText: '#1E3932',
  },
  {
    number: '02',
    phase: 'Build',
    headline: 'Design and code, in lockstep.',
    body: 'No handoff lag. Design and engineering move together — fast iterations, live previews, weekly check-ins. You always know where we are.',
    tags: ['UI/UX Design', 'Development', 'Weekly Reviews'],
    bg: '#1E3932',
    border: 'transparent',
    text: '#FAFAF8',
    sub: 'rgba(250,250,248,0.58)',
    numColor: '#C6E23B',
    tagBg: 'rgba(198,226,59,0.15)',
    tagText: '#C6E23B',
  },
  {
    number: '03',
    phase: 'Launch',
    headline: 'Ship fast. Then make it better.',
    body: 'Staging, QA checklist, performance audits. We deploy with confidence — and stay on-call for 30 days post-launch.',
    tags: ['QA Testing', 'Deployment', '30-Day Support'],
    bg: '#080E0C',
    border: 'transparent',
    text: '#FAFAF8',
    sub: 'rgba(250,250,248,0.5)',
    numColor: '#C6E23B',
    tagBg: 'rgba(198,226,59,0.1)',
    tagText: '#C6E23B',
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-white scroll-mt-24 overflow-hidden">
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
              Our Process
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#080E0C] tracking-tighter leading-[1]">
              How We <em className="not-italic text-[#1E3932]">Actually</em> Work.
            </h2>
          </div>
          <p className="font-body text-[#6B7471] text-base md:text-lg max-w-xs leading-relaxed">
            Three phases. Zero ambiguity. You always know what&apos;s happening and why.
          </p>
        </motion.div>

        {/* ── Step Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="group relative rounded-card3 p-8 md:p-10 flex flex-col gap-5 overflow-hidden cursor-default"
              style={{ backgroundColor: step.bg, border: `1px solid ${step.border}` }}
            >
              {/* Watermark number */}
              <span
                className="absolute -bottom-4 -right-2 font-heading text-[120px] font-extrabold leading-none select-none pointer-events-none"
                style={{ color: step.numColor, opacity: 0.06 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Phase badge */}
              <span
                className="text-[11px] font-body font-bold uppercase tracking-[0.2em]"
                style={{ color: step.sub }}
              >
                Step {step.number}
              </span>

              {/* Titles */}
              <div>
                <h3
                  className="font-heading text-3xl font-bold tracking-tight mb-1.5"
                  style={{ color: step.text }}
                >
                  {step.phase}
                </h3>
                <p
                  className="font-body text-sm font-semibold leading-snug"
                  style={{ color: step.sub }}
                >
                  {step.headline}
                </p>
              </div>

              {/* Body */}
              <p
                className="font-body text-sm leading-relaxed flex-grow"
                style={{ color: step.sub }}
              >
                {step.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: step.tagBg, color: step.tagText }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
