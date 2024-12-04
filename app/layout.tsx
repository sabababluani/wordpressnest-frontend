import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, DM_Sans } from 'next/font/google';
import React, { JSX } from 'react';
import './globals.css';

const inter: NextFont = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-DM-sans',
});

export const metadata: Metadata = {
  title: 'WordPress',
  description: 'Generated by Kaizen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
