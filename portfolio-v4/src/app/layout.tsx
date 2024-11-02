import React from 'react';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import '../styles/globals.scss';
import { Syne, Inter } from "next/font/google";

// Configure each font separately
const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}