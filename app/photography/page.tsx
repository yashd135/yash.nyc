"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

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
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Photography Portfolio</h1>
        <p className="text-xl text-gray-300 mb-6">Here's a selection of some of my work, interested?</p>
        <a
          href="mailto:yashthetic@gmail.com"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Mail size={20} />
          <span>Contact for Bookings</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
            {photo.caption && (
              <p className="mt-2 text-center text-gray-400 text-sm">{photo.caption}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

