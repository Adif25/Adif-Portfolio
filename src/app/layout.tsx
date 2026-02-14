import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/providers/SmoothScroll";
import FloatingShapes from "@/components/effects/FloatingShapes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Adif Hossain | Software Engineer",
  description:
    "Engineering through perspective. Software developer building solutions that align teams and create momentum.",
  keywords: [
    "software engineer",
    "developer",
    "portfolio",
    "Adif Hossain",
    "web development",
  ],
  authors: [{ name: "Adif Hossain" }],
  openGraph: {
    title: "Adif Hossain | Software Engineer",
    description:
      "Engineering through perspective. Building software that aligns teams and creates momentum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <CustomCursor />
          <FloatingShapes />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
