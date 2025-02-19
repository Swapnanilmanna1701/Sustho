"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global1.css";
import { Header } from "@/components/ui/header1";
import { Footer } from "@/components/ui/footer1";

const inter = Inter({ subsets: ["latin"] });

e
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
