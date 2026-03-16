import { TeamMember, Testimonial } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Rivaldi',
    role: 'CEO & Founder',
    // image: '/team/rivaldi.png',
    socials: {
      instagram: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Adi',
    role: 'Programer',
    // image: '/team/adi.png',
    socials: {
      instagram: '#',
      linkedin: '#',
      github: '#',

    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Kerjasama yang luar biasa! Tim Lunatic Foundry berhasil mengubah visi kami menjadi produk digital yang tidak hanya cantik, tapi juga fungsional dan disukai pengguna.',
    name: 'Reza Mahendra',
    role: 'CEO',
    company: 'TokoKu',
    avatar: '/testimonials/reza.jpg',
  },
  {
    quote: 'Profesionalisme tinggi dan hasil yang melebihi ekspektasi. Aplikasi yang mereka buat membantu kami meningkatkan engagement pengguna hingga 200%.',
    name: 'Diana Putri',
    role: 'Product Manager',
    company: 'GerakIn',
    avatar: '/testimonials/diana.jpg',
  },
  {
    quote: 'Lunatic Foundry bukan hanya vendor, tapi partner strategis. Mereka benar-benar memahami bisnis kami dan memberikan solusi yang tepat sasaran.',
    name: 'Farhan Akbar',
    role: 'CTO',
    company: 'BayarIn',
    avatar: '/testimonials/farhan.jpg',
  },
];
