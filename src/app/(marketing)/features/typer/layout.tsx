import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./global2.css";
import  Navbar  from "@/components/navigation/navbar";
import { Footer } from "@/components/typer/Footer";
import { ThemeProvider } from '@/components/typer/theme-provider';


export const metadata: Metadata = {
  title: "MatrX AI",
  description: "Be Unstoppable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className='bg-black'
        
      > 
      <ThemeProvider
            attribute="class"
            
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        
        <Footer />
        <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
