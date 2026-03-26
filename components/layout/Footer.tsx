'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile App', href: '/services' },
      { label: 'UI/UX Design', href: '/services' },
      { label: 'Branding', href: '/services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter,   label: 'Twitter',   href: '#' },
  { Icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { Icon: Github,    label: 'GitHub',    href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080E0C] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* ── Top: brand + links ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 pb-16 border-b border-white/6">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-white mb-4 block hover:text-[#C6E23B] transition-colors">
              Lunatic Foundry
            </Link>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Digital Agency based in Indonesia. We build fast, conversion-focused digital products.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-8">
              {socials.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-body font-semibold text-white/40 text-xs uppercase tracking-[0.18em] mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} Lunatic Foundry. Made with care in Indonesia.
          </p>
          <p className="font-body text-xs text-white/20">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}