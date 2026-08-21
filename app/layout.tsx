import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Supermarket & Retail Store Display Space for Rent in India | Racks on Rent",
  description:
    "Find or list unused shelves, racks, end-cap displays, and retail spaces inside supermarkets across India. Racks on Rent connects supermarket owners with FMCG brands, food companies, and product entrepreneurs.",
  keywords: [
    "Racks on Rent",
    "Supermarket display space for rent",
    "Supermarket shelf space for rent",
    "Supermarket end-cap display rental",
    "Rent space inside supermarket",
    "Product display in supermarkets",
    "Retail shelf rental India",
    "FMCG brand offline selling",
    "Supermarket space marketplace",
    "Supermarket owners extra income",
    "Rent product shelf Hyderabad",
    "Display products in retail stores"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  openGraph: {
    title: "Supermarket & Retail Store Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused shelves, racks, end-cap displays, and retail spaces inside supermarkets across India. Racks on Rent connects supermarket owners with FMCG brands, food companies, and product entrepreneurs.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/images/logo.png`,
    "description": "Share Space. Grow Together. Connecting supermarket owners with FMCG brands, food companies, and product entrepreneurs.",
    "telephone": "+917995424477",
    "email": "racksonrent@gmail.com"
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF5] text-[#1F1F1F] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

