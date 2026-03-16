'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-4 inset-x-4 md:left-1/2 md:-translate-x-1/2 z-50
          flex items-center justify-between
          rounded-full px-4 md:px-6 py-3
          transition-all duration-500
          mx-auto
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg w-auto md:w-[92%] md:max-w-4xl'
            : 'bg-white/80 backdrop-blur-xl shadow-md w-auto md:w-[95%] md:max-w-5xl'
          }
        `}
      >
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg sm:text-xl text-lt-dark shrink-0">
          <span className="inline">Lunatic Foundry</span>
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
            Lf
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold
                  transition-all duration-300
                  ${isActive
                    ? 'bg-lt-green/10 text-lt-green'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-8 py-3 rounded-full text-lg font-semibold
                      transition-all duration-300
                      ${isActive
                        ? 'bg-lt-green text-white'
                        : 'bg-lt-pastel text-lt-dark hover:bg-lt-green/20'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
