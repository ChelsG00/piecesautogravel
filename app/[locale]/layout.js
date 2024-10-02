// RootLayout.js
import React from 'react';
import { Inter, Audiowide } from 'next/font/google';
import './globals.css';
import './styles.css';
import { getDictionary } from './dictionaries';
import TopLanguage from '@/components/pages/nav/TopLanguage';
import NavBar from '@/components/pages/nav/NavBar';
import Sponsors from '@/components/pages/sponsors/sponsors';
import Footer from '@/components/pages/footer/Footer';
import RenderPage from './page'; // Import the RenderPage function

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const audiowide = Audiowide({
  subsets: ['latin'],
  variable: '--font-audiowide',
  weight: '400',
});

export default async function RootLayout({ children, params }) {
  const translation = await getDictionary(params.locale);

  const handlePinSubmit = (enteredPin) => {
    const correctPin = process.env.REACT_APP_PIN;
    if (enteredPin === correctPin) {
      console.log('Authenticated!');
    } else {
      alert('Incorrect PIN');
    }
  };

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${audiowide.variable}`}>
        <TopLanguage t={translation} locale={params.locale} />
        <NavBar t={translation} locale={params.locale} />
        <div>{children}</div>
        <Sponsors t={translation} locale={params.locale} />
        <Footer t={translation} locale={params.locale} />
      </body>
    </html>
  );
}

// ${orbitron.variable}