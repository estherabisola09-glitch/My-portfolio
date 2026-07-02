import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kusimo — Fullstack Developer",
  description: "Building fast, functional, and beautiful digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}