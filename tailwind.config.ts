import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Font System ────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },

      // ─── Color Tokens ────────────────────────────────────────
      colors: {
        // Foundation
        ink:     '#080E0C',   // near-black — primary text / dark bg
        forest:  '#1E3932',   // dark green — secondary brand
        lime:    '#C6E23B',   // electric lime — primary accent / CTA
        chalk:   '#F8F9F4',   // off-white — light section bg
        fog:     '#EEF0E9',   // subtle section divider bg
        // Extended
        violet:  '#5022ED',   // purple — CTA sections / highlight
        mist:    '#E4E8DD',   // border / divider
        stone:   '#6B7471',   // secondary text
        cream:   '#FAFAF8',   // card bg
        // Legacy aliases kept for compat
        'lt-dark':   '#080E0C',
        'lt-green':  '#C6E23B',
        'lt-pastel': '#F8F9F4',
      },

      // ─── Border Radius ────────────────────────────────────────
      borderRadius: {
        card:   '24px',
        card2:  '32px',
        card3:  '40px',
        pill:   '9999px',
      },

      // ─── Shadows ─────────────────────────────────────────────
      boxShadow: {
        card:   '0 2px 16px rgba(8,14,12,0.07), 0 1px 4px rgba(8,14,12,0.04)',
        'card-hover': '0 8px 40px rgba(8,14,12,0.12), 0 2px 8px rgba(8,14,12,0.06)',
        lime:   '0 8px 32px rgba(198,226,59,0.25)',
        violet: '0 8px 32px rgba(80,34,237,0.25)',
        forest: '0 8px 32px rgba(30,57,50,0.20)',
      },

      // ─── Spacing ─────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
