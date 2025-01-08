import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./global2.css";
import { Navbar } from "@/components/typer/Navbar";
import { Footer } from "@/components/typer/Footer";
import { ThemeProvider } from '@/components/typer/theme-provider';


export const metadata: Metadata = {
  title: "TypeArena",
  description: "A typing test game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      > 
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
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
