"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { PhotoGallery } from "@components/PhotoGallery"

export default function Photography() {
  const photos = [
    { 
      src: "/baby_central_park.jpg", 
      alt: "Baby photo",
      caption: "Baby Portrait Session - Central Park" 
    },
    { 
      src: "/podcast.jpeg", 
      alt: "Podcast photo",
      caption: "Podcast Studio Behind The Scenes" 
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-8 w-full px-0 md:px-4 max-w-7xl"
      >
        <a
          href="mailto:yashthetic@gmail.com"
          className="flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors w-full md:w-auto md:px-6 md:inline-flex"
        >
          <Mail size={20} />
          <span>Contact for Bookings</span>
        </a>
      </motion.div>

      <PhotoGallery photos={photos} />
    </div>
  )
}

