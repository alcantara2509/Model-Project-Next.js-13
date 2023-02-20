import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
