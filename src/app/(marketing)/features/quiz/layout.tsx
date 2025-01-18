"use client"
import React from "react";
//import ReactDOM from "react-dom/client";
import "./index.css";
import { Inter } from "next/font/google";

import App from "./page";
import { Provider } from "react-redux";
import { store } from "@/pages/redux";

const inter = Inter({ subsets: ["latin"] });










export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
        
        <main> {children}</main>
        <App />
        </Provider>
      </body>
    </html>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
