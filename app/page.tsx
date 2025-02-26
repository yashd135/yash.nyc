"use client"

import Image from "next/image"
import Link from "next/link"
import { FileText, LinkedinIcon, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const experiences = [
    {
      title: "Backend Software Engineer",
      company: "Amazon",
      period: "2022 - Present",
      description: "",
      logo: "/amazon-logo.jpg",
    },
    {
      title: "Full Stack Software Engineer",
      company: "American Express",
      period: "2019 - 2022",
      description: "",
      logo: "/american-express-logo.png",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-6">Hi, I'm Yash</h1>
        <Image
          src="/profile-pic.jpg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mb-4"
          priority
        />
        <p className="text-xl mb-8 max-w-2xl">
          Based in New York City. I write code, take pictures, ski, play tennis, and much more.
        </p>
      </motion.div>

      {/* Contact Links */}
      <motion.div
        className="flex gap-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center">
          <a
            href="https://drive.google.com/file/d/1jzsgVpmaWer_ora63Mh6HD7fpl-fCWu6/view?usp=sharing"
            target="_blank"
            className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center w-16 h-16 mb-2"
            aria-label="Download Resume"
            rel="noreferrer"
          >
            <FileText size={24} />
          </a>
          <span className="text-sm text-gray-400">Resume</span>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://linkedin.com/in/yashd1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center w-16 h-16 mb-2"
            aria-label="Visit LinkedIn Profile"
          >
            <LinkedinIcon size={24} />
          </a>
          <span className="text-sm text-gray-400">LinkedIn</span>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="mailto:yashd135@gmail.com"
            className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center w-16 h-16 mb-2"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
          <span className="text-sm text-gray-400">Email</span>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="w-full max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-gray-700 ml-4"
                />
              </div>
              <p className="mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Photography Link */}
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Link
          href="/photography"
          className="block bg-gray-800 p-6 rounded-lg transition-transform hover:scale-105 hover:shadow-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Photography</h2>
          <p>Contact me for photoshoots!</p>
        </Link>
      </motion.div>
    </div>
  )
}

