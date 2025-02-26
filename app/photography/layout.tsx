import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography Portfolio | Yash Desai',
  description: 'Professional photography services in NYC. Portrait, event, and commercial photography by Yash Desai.',
  openGraph: {
    title: 'Photography by Yash Desai',
    description: 'Professional photography services in NYC',
    images: ['/og-photography.jpg'],
    type: 'website',
  },
}

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 