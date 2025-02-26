'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { fadeInUp, getViewportOptions } from '@/utils/animations';
import 'yet-another-react-lightbox/styles.css';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

// Lazy load the lightbox component
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-white"></div>
    </div>
  ),
});

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [lightboxState, setLightboxState] = useState({
    open: false,
    index: 0
  });

  // Handle clicking on a photo to open lightbox
  const openLightbox = useCallback((index: number) => {
    setLightboxState({ open: true, index });
  }, []);

  // Handle closing the lightbox
  const closeLightbox = useCallback(() => {
    setLightboxState(prev => ({ ...prev, open: false }));
  }, []);

  if (!photos || photos.length === 0) {
    return <p className="text-center text-gray-400 py-12">No photos to display</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full px-0 md:px-4 max-w-7xl">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={getViewportOptions()}
            className="flex flex-col cursor-pointer"
            onClick={() => openLightbox(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(i);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${photo.alt} in lightbox`}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src={photo.src} 
                alt={`${photo.alt} - Professional photography by Yash Desai in New York City`} 
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority={i < 2}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gray-800', 'bg-opacity-75', 'rounded-lg', 'flex', 'items-center', 'justify-center');
                    const errorText = document.createElement('p');
                    errorText.className = 'text-sm text-gray-400';
                    errorText.textContent = 'Image failed to load';
                    parent.appendChild(errorText);
                  }
                }}
              />
            </div>
            {photo.caption && (
              <p className="mt-2 text-center text-gray-400 text-sm px-4">{photo.caption}</p>
            )}
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={lightboxState.open}
        close={closeLightbox}
        index={lightboxState.index}
        slides={photos.map(photo => ({ src: photo.src, alt: photo.alt }))}
      />
    </>
  );
}