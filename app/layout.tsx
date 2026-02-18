import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B4150',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://katie-chickering-portfolio.vercel.app'),
  title: "Katie Chickering | Software Engineer",
  description: "Software Engineer specializing in front-end and mobile development with React and React Native.",
  icons: {
    icon: '/BulletIcon.svg',
  },
  openGraph: {
    type: 'website',
    url: '/',
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
