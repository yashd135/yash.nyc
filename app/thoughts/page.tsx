"use client"

import { motion } from 'framer-motion';

export default function ThoughtsPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Thoughts</h1>
        
        <div className="bg-gray-800 p-12 rounded-lg flex flex-col items-center justify-center">
          <p className="text-2xl italic text-gray-400">Coming soon...</p>
        </div>
      </motion.div>
    </div>
  );
} 