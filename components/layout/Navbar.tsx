'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [isVisible,  setIsVisible]  = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setIsVisible(y <= lastY || y < 80);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          flex items-center justify-between
          rounded-full px-4 py-2.5
          transition-all duration-400 w-[calc(100%-2rem)] max-w-3xl
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none'}
          ${scrolled
            ? 'bg-[#080E0C]/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.35)] border border-white/10'
            : 'bg-[#080E0C]/70 backdrop-blur-md border border-white/8'
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-[15px] text-white hover:text-[#C6E23B] transition-colors shrink-0 mr-2"
        >
          Lunatic Foundry
        </Link>

        {/* Separator */}
        <div className="hidden md:block w-px h-5 bg-white/10 mx-1 shrink-0" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 ml-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3.5 py-1.5 rounded-full text-[13px] font-body font-medium transition-all duration-200 whitespace-nowrap
                  ${active
                    ? 'bg-white/12 text-white'
                    : 'text-white/55 hover:text-white hover:bg-white/6'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 ml-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center whitespace-nowrap bg-[#C6E23B] text-[#080E0C] px-4 py-[7px] rounded-full font-body font-bold text-[13px] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(198,226,59,0.4)] transition-all duration-200 active:scale-95"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-white/70 hover:bg-white/8 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080E0C] flex flex-col px-6 pt-24 pb-12 gap-2"
          >
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      block px-6 py-4 rounded-2xl font-heading text-2xl font-bold transition-all
                      ${active
                        ? 'bg-[#1E3932] text-[#C6E23B]'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full text-center bg-[#C6E23B] text-[#080E0C] px-6 py-4 rounded-2xl font-heading font-bold text-lg"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
