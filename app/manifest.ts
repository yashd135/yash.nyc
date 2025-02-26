import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yash Desai | Software Engineer & Photographer',
    short_name: 'Yash Desai',
    description: 'Software Engineer at Amazon, based in NYC. Specializing in backend development and photography.',
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#121212',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
} 