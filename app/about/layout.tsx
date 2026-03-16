import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat Lunatic Foundry, tim ahli di balik solusi digital inovatif untuk bisnis Anda di Indonesia.',
  openGraph: {
    title: 'Tentang Kami | Lunatic Foundry',
    description: 'Mengenal visi, misi, dan tim profesional di Lunatic Foundry.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
