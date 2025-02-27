import React from 'react';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import '../styles/globals.scss';
import { Syne, Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Configure each font separately
const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syne'
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}