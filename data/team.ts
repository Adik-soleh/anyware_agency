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
    role: 'Programmer',
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
    quote: 'Lunatic Foundry berdiri atas satu keyakinan sederhana: bisnis yang baik layak mendapatkan website yang setara.',
    name: 'Rivaldi',
    role: 'CEO',
    company: 'Lunatic Foundry',
    avatar: '/testimonials/rivaldi.jpg',
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
