'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { Instagram, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {teamMembers.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
          className="group cursor-default"
        >
          {/* Avatar */}
          <div className="relative aspect-[4/3] rounded-t-card3 overflow-hidden bg-[#1E3932]">
            <Image
              src={member.image || '/team/avatar.png'}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Hover: show initials fallback if no image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0">
              <span className="font-heading text-6xl font-extrabold text-[#C6E23B]">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-[#080E0C] rounded-b-card3 px-6 py-5 flex items-center justify-between group-hover:bg-[#1E3932] transition-colors duration-300">
            <div>
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 mb-1">
                {member.role}
              </p>
              <h3 className="font-heading text-xl font-bold text-white leading-tight tracking-tight">
                {member.name}
              </h3>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              {[
                { Icon: Instagram, href: member.socials?.instagram },
                { Icon: Linkedin,  href: member.socials?.linkedin },
                { Icon: Github,    href: member.socials?.github },
              ].map(({ Icon, href }, idx) =>
                href ? (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6E23B] hover:text-[#080E0C] text-white flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ) : null
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}