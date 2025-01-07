import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bookwind",
  description: "Rapidly search books without ever leaving your computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-grid bg-[bottom_1px_center]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
        <Nav />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
