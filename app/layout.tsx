import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexTech",
  description: "At the forefront of the future",
  metadataBase: new URL("https://nextech-africa.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://nextech-africa.vercel.app/og-image",
    images: [{ url: "/og.png" }],
    title: "NexTech",
    description: "At the forefront of the future",
  },
  twitter: {
    images: ["https://nextech-africa.vercel.app/og-image.png"],
    card: "summary_large_image",
    title: "NexTech",
    description: "At the forefront of the future",
    creator: "@cirejr_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <main className="container mx-auto max-w-[1080px]">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
