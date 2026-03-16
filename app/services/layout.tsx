import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: 'Solusi digital menyeluruh: UI/UX Design, Web Development, Mobile Development, dan Konsultasi Strategi Digital.',
  keywords: ['jasa ui ux', 'jasa pembuatan website', 'jasa mobile development', 'konsultasi digital'],
  openGraph: {
    title: 'Layanan Kami | Lunatic Foundry',
    description: 'Solusi digital profesional untuk transformasi bisnis Anda.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
