// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katie Chickering | Software Engineer",
  description: "Software Engineer specializing in front-end and mobile development with React and React Native.",
  icons: {
    icon: '/BulletIcon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'katie-chickering-portfolio.vercel.app',
    title: 'Katie Chickering | Software Engineer',
    description: 'I build thoughtful digital experiences that help people succeed.',
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
  themeColor: '#0B4150',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}