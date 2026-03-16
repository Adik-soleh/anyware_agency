'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { Instagram, Linkedin, Github, Facebook } from 'lucide-react';
import Image from "next/image";

export default function TeamGrid() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#C6E23B] mb-4 block">Meet the Team</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1E3932] tracking-tighter leading-[1.1] md:leading-none">
            Orang hebat di balik <br /> Lunatic Foundry
          </h2>
        </motion.div>

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
              <div className="relative aspect-[4/5] rounded-[48px] bg-[#F3F3F1] overflow-hidden border-2 border-gray-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">

                <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-gray-300/50 flex items-center justify-center">
                  <Image
                  src={member.image || "/team/avatar.png"}
                  alt={member.name.charAt(0)}
                  fill
                  className="object-cover"
                />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-[32px] p-6 shadow-lg text-center transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#1E3932]/60 mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-[#1E3932] tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
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
      </div>
    </section>
  );
}