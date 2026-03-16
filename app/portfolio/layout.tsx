import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Karya',
  description: 'Lihat proyek-proyek terbaik yang telah kami kerjakan untuk klien di berbagai sektor industri.',
  openGraph: {
    title: 'Portfolio | Lunatic Foundry',
    description: 'Kumpulan karya terbaik Lunatic Foundry dalam membangun produk digital.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
