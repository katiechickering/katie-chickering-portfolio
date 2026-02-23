import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from '@/components/Header'
import { Inter, NTR, Enriqueta } from "next/font/google";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B4150',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://katie-chickering-portfolio.vercel.app'),
  title: "Katie Chickering | Software Engineer",
  authors: [{ name: "Katie Chickering" }],
  description: "Software Engineer specializing in front-end and mobile development with React and React Native.",
  icons: {
    icon: '/BulletIcon.svg',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Katie Chickering | Software Engineer',
    description: 'Software Engineer specializing in front-end and mobile development with React and React Native.',
    siteName: 'Katie Chickering',
    images: [
      {
        url: '/TrackMyChores3Phones.png',
        width: 1144,
        height: 672,
        alt: 'Track My Chores App Preview',
      }
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ntr",
});

export const enriqueta = Enriqueta({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-enriqueta",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ntr.variable} ${enriqueta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
