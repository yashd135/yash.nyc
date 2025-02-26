import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@components/Analytics"
import { PersonJsonLd } from "./JsonLd"
import { CanonicalLink } from "@components/CanonicalLink"
import { Header } from "@/components/organisms/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yash Desai | Software Engineer & Photographer",
  description: "Software Engineer at Amazon, based in NYC. Specializing in backend development and photography.",
  openGraph: {
    title: "Yash Desai",
    description: "Software Engineer & Photographer based in NYC",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yash Desai | Software Engineer & Photographer",
    description: "Software Engineer at Amazon, based in NYC. Specializing in backend development and photography.",
    images: ['/og-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  alternates: {
    canonical: 'https://yash.nyc',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'application-name': 'Yash Desai Portfolio',
    'apple-mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <GoogleAnalytics />
        <PersonJsonLd />
        <CanonicalLink />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-900 text-white`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-800 text-white p-2 z-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="container mx-auto px-6 py-8 flex-grow">{children}</main>
        <footer className="bg-black text-white text-center py-4 mt-auto">
          <p>&copy; {new Date().getFullYear()} Yash Desai. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

