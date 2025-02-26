'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, getViewportOptions } from "@/utils/animations";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  className?: string;
}

export function LinkCard({ href, title, description, className = "" }: LinkCardProps) {
  return (
    <motion.div
      className={`w-full max-w-3xl ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
      viewport={getViewportOptions()}
    >
      <Link
        href={href}
        className="block bg-zinc-900 p-6 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:bg-zinc-800 text-center border border-zinc-700"
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="text-zinc-400">{description}</p>}
      </Link>
    </motion.div>
  );
} 