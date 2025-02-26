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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full px-0 md:px-4 max-w-7xl">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,..."
              />
            </div>
            {photo.caption && (
              <p className="mt-2 text-center text-gray-400 text-sm px-4">{photo.caption}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

