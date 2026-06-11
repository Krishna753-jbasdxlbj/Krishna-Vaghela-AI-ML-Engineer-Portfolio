import type { Metadata } from 'next';
import { Shrikhand, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import CustomCursor from '@/components/CustomCursor';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import InertiaPlugin from 'gsap/InertiaPlugin';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap';
gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  SplitText,
  InertiaPlugin,
  DrawSVGPlugin
);

const shrikhand = Shrikhand({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
});
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
});
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'krishna vaghela | ai/ml engineer',
  description:
    'Krishna Vaghela — AI/ML Engineer. Computer Vision, RAG systems, full-stack deployment. PyTorch · LangChain · YOLOv8 · React · Next.js · Supabase',
  metadataBase: new URL('https://krishna-portfolio.vercel.app'),
  openGraph: {
    title: 'Krishna Vaghela | AI/ML Engineer',
    description:
      'AI/ML Engineer — Computer Vision, RAG systems, full-stack deployment.',
    url: 'https://krishna-portfolio.vercel.app/',
    siteName: 'Krishna Vaghela',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Vaghela | AI/ML Engineer',
    description:
      'AI/ML Engineer — Computer Vision, RAG systems, full-stack deployment.',
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        />
      </head>
      <body
        className={`${shrikhand.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <PageTransition />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
