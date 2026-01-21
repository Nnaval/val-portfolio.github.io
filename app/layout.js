import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Val Portfolio | frontend Developer",
  description: "Professional portfolio showcasing web development projects and skills. Specializing in modern web technologies including React, Next.js, and more.",
  keywords: ["web developer", "frontend developer", "React", "Next.js", "portfolio"],
  authors: [{ name: "Val Portfolio" }],
  openGraph: {
    title: "Val Portfolio | frontend Developer",
    description: "Professional portfolio showcasing web development projects and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
