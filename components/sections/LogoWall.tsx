'use client';

import React from 'react';

interface Tech { name: string; slug: string; color: string; }

const techStack: Tech[] = [
  { name: 'Python',     slug: 'python',      color: '#3776AB' },
  { name: 'React',      slug: 'react',       color: '#61DAFB' },
  { name: 'Next.js',    slug: 'nextdotjs',   color: '#000000' },
  { name: 'Astro',      slug: 'astro',       color: '#FF5D01' },
  { name: 'HTML5',      slug: 'html5',       color: '#E34F26' },
  { name: 'CSS3',       slug: 'css',         color: '#1572B6' },
  { name: 'JavaScript', slug: 'javascript',  color: '#F7DF1E' },
  { name: 'TypeScript', slug: 'typescript',  color: '#3178C6' },
  { name: 'Node.js',    slug: 'nodedotjs',   color: '#339933' },
  { name: 'Figma',      slug: 'figma',       color: '#F24E1E' },
];

function LogoCard({ tech }: { tech: Tech }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2.5 px-6 py-5 bg-white rounded-2xl border border-[#E4E8DD] shadow-card"
      style={{ minWidth: '116px' }}
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
        alt={tech.name}
        width={28} height={28}
        className="w-7 h-7 object-contain"
        loading="lazy" decoding="async"
      />
      <span className="font-body text-xs font-semibold text-[#6B7471] whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function LogoWall() {
  const copies = ['a', 'b', 'c', 'd'] as const;

  return (
    <section className="py-16 bg-[#F8F9F4] overflow-hidden border-y border-[#E4E8DD]">
      <div className="text-center mb-10 px-6">
        <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.2em] text-[#6B7471] mb-3">
          Built with
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#080E0C] tracking-tight">
          The right tools.
        </h2>
      </div>

      <div className="marquee-viewport" aria-hidden="true">
        <div className="marquee-track">
          {copies.flatMap((copy) =>
            techStack.map((tech) => (
              <LogoCard key={`${copy}-${tech.slug}`} tech={tech} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}