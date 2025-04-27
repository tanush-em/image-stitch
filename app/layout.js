// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Room Visualizer',
  description: 'Customize your room with various items',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.css" 
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.js" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}