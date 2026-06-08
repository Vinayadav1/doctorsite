import type { Metadata } from "next";
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DoctorSite - Build Your Digital Presence as a Doctor",
  description: "Professional website development for doctors and surgeons. Get more patients, build trust, and establish your online presence.",
  keywords: ["doctor website", "medical website", "surgeon website", "healthcare digital presence", "doctor SEO"],
  authors: [{ name: "DoctorSite" }],
  openGraph: {
    title: "DoctorSite - Build Your Digital Presence as a Doctor",
    description: "Professional website development for doctors and surgeons. Get more patients, build trust, and establish your online presence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoctorSite - Build Your Digital Presence as a Doctor",
    description: "Professional website development for doctors and surgeons. Get more patients, build trust, and establish your online presence.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${playfairDisplay.variable} font-primary antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
