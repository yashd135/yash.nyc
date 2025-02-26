'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, getViewportOptions } from "@/utils/animations";
import { DEFAULT_BLUR_DATA_URL } from "@/utils/image";

interface Experience {
  title: string;
  company: string;
  period: string;
  logo: string;
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Backend Software Engineer",
      company: "Amazon",
      period: "2022 - Present",
      logo: "/amazon-logo.jpg",
    },
    {
      title: "Full Stack Software Engineer",
      company: "American Express",
      period: "2019 - 2022",
      logo: "/american-express-logo.png",
    },
  ];

  return (
    <motion.div
      className="w-full max-w-3xl mb-12"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
      viewport={getViewportOptions()}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={getViewportOptions()}
            className="bg-gray-800 p-6 rounded-lg relative"
          >
            <div className="pr-16 md:pr-20">
              <h3 className="text-xl md:text-2xl font-semibold break-words">{exp.title}</h3>
              <h4 className="text-lg md:text-xl text-gray-300 mb-2">{exp.company}</h4>
              <p className="text-gray-400">{exp.period}</p>
            </div>
            
            <div className="absolute top-6 right-6">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-700 w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                loading="lazy"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 