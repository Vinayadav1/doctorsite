import type { Metadata } from "next";
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "DoctorSite - Healthcare Websites That Generate Patient Appointments",
  description: "Healthcare website design, medical SEO, AI search optimization, and appointment conversion systems for doctors, clinics, surgeons, hospitals, and specialists. Book a free website audit.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "doctor website design",
    "clinic website design",
    "medical SEO",
    "healthcare marketing",
    "Google Maps SEO for doctors",
    "AI search optimization for doctors",
    "healthcare website audit",
  ],
  authors: [{ name: "DoctorSite" }],
  openGraph: {
    title: "DoctorSite - Healthcare Websites That Generate Patient Appointments",
    description: "Healthcare website design, medical SEO, AI search optimization, and appointment conversion systems for doctors, clinics, surgeons, hospitals, and specialists.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoctorSite - Healthcare Websites That Generate Patient Appointments",
    description: "Healthcare website design, medical SEO, AI search optimization, and appointment conversion systems for healthcare professionals.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18242873355"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18242873355');
`}
        </Script>
      </head>
      <body className={`${hankenGrotesk.variable} ${playfairDisplay.variable} font-primary antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
