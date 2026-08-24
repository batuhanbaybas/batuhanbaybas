import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Independent Software Engineer",
  email: site.links.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
  },
  sameAs: [site.links.github, site.links.linkedin],
  description: site.metadata.description,
};

export const metadata: Metadata = {
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: site.metadata.title,
    description: site.metadata.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#141210",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          type="application/ld+json"
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
