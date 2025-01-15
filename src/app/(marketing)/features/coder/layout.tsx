"use client"
import React from "react";
//import ReactDOM from "react-dom/client";
import { Inter } from "next/font/google";

import "./index.css";
import App from "./page";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
        <App />
      </body>
    </html>
  );
}