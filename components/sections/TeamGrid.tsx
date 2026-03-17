'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { Instagram, Linkedin, Github } from 'lucide-react';
import Image from "next/image";

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamMembers.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative group cursor-pointer"
        >
          <div className="relative aspect-square rounded-[48px] bg-[#F3F3F1] overflow-hidden border-2 border-gray-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-gray-300/50 flex items-center justify-center">
              <Image
                src={member.image || "/team/avatar.png"}
                alt={member.name.charAt(0)}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-4 bg-white border border-[#1E3932]/10 rounded-[24px] px-6 py-5 shadow-[0_10px_24px_rgba(17,24,39,0.08)] text-center transition-all duration-500 group-hover:shadow-[0_16px_32px_rgba(17,24,39,0.12)]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1E3932]/70 mb-1.5">
              {member.role}
            </p>
            <h3 className="text-3xl font-black text-[#1E3932] leading-none tracking-tight">
              {member.name}
            </h3>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 z-20">
            {[
              { icon: Instagram, href: member.socials.instagram, color: 'hover:bg-pink-500' },
              { icon: Linkedin, href: member.socials.linkedin, color: 'hover:bg-blue-600' },
              { icon: Github, href: member.socials.github, color: 'hover:bg-gray-900' }
            ].map((social, idx) => (
              social.href && (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-xl transition-all ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              )
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}