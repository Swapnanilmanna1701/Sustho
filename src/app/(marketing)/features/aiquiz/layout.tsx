import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "AI Powered Quiz App",
  description: "Created with NextJS, TS, Tailwind, OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
