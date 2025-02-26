import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@components/Analytics"

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
    title: "Yash Desai",
    description: "Software Engineer & Photographer based in NYC",
    images: ['/og-image.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full dark">
      <head>
        <GoogleTagManager />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-900 text-white`}>
        <GoogleTagManagerNoScript />
        <header className="bg-black text-white">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex justify-center items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors px-2 py-1">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">|</li>
              <li>
                <Link href="/photography" className="hover:text-gray-300 transition-colors px-2 py-1">
                  Photography
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8 flex-grow">{children}</main>
        <footer className="bg-black text-white text-center py-4 mt-auto">
          <p>&copy; {new Date().getFullYear()} Yash Desai. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

