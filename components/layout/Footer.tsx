'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github, Apple, PlayCircle } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact', 'Social Good'],
  },
  {
    title: 'Community',
    links: ['Creators', 'Enterprise', 'Charities', 'Events', 'Developer'],
  },
  {
    title: 'Support',
    links: ['Help Topics', 'Getting Started', 'FAQs', 'Status'],
  },
  {
    title: 'Trust & Legal',
    links: ['Terms', 'Privacy', 'Cookie Notice', 'Trust Center'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#5022ED] pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#B2E2F2] rounded-full blur-[120px]" />
        <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-[#E9C3E6] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Jumpstart your digital <br /> future today
          </h2>
        </div>

        <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-black text-gray-900 mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-500 hover:text-[#5022ED] transition-colors font-medium text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/50 text-xs font-medium max-w-2xl mx-auto leading-relaxed">
            © 2026 Lunatic Foundry. We acknowledge the Traditional Custodians of the land on which our studio stands. Made with passion in Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}