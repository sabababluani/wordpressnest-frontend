import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, DM_Sans } from 'next/font/google';
import React, { JSX } from 'react';
import './globals.css';
import Header from '@/app/components/Header/Header';
import Navigation from '@/app/components/Navigation/Navigation';

const inter: NextFont = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-DM-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.className}`}>
        <div className="wrapper">
          <Navigation />
          <div className="app">
            <div className="container">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
