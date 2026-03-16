import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ANYWARE_AGENCY — Digital Agency Indonesia",
    template: "%s | ANYWARE_AGENCY",
  },
  description: "Digital Agency Indonesia penyedia jasa pembuatan website, mobile app, dan UI/UX design. Solusi teknologi modern untuk transformasi digital bisnis Anda.",
  keywords: [
    "digital agency indonesia",
    "jasa pembuatan website",
    "jasa ui ux design",
    "mobile app development indonesia",
    "software house indonesia",
    "pembuatan aplikasi mobile",
    "web development jakarta",
    "teknologi transformasi digital",
    "anyware agency",
    "creative digital solution",
  ],
  authors: [{ name: "ANYWARE_AGENCY" }],
  creator: "ANYWARE_AGENCY",
  publisher: "ANYWARE_AGENCY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://anywareagency.vercel.app/",
    siteName: "ANYWARE_AGENCY",
    title: "ANYWARE_AGENCY — Digital Agency Indonesia",
    description: "Solusi teknologi modern untuk mengubah ide brilian Anda menjadi produk digital luar biasa. Jasa web & mobile development terbaik.",
    images: [
      {
        url: "https://anywareagency.vercel.app/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "ANYWARE_AGENCY Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANYWARE_AGENCY — Digital Agency Indonesia",
    description: "Solusi teknologi modern untuk transformasi digital bisnis Anda. Web, Mobile, & UI/UX Design.",
    images: ["https://anywareagency.vercel.app/og-image.png"],
    creator: "@anywareagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token", // User should replace this with their actual token
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ANYWARE_AGENCY",
              "url": "https://anywareagency.vercel.app/",
              "logo": "https://anywareagency.vercel.app/favicon.ico",
              "sameAs": [
                "https://twitter.com/anywareagency",
                "https://instagram.com/anywareagency",
                "https://linkedin.com/company/anywareagency"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-812-3456-7890",
                "contactType": "customer service"
              },
              "description": "Digital Agency Indonesia penyedia jasa pembuatan website, mobile app, dan UI/UX design."
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
