'use client';

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { DEFAULT_BLUR_DATA_URL } from "@/utils/image";
import { useEffect } from "react";

const text = "Hi, I'm Yash";

export function Profile() {
  const controls = useAnimationControls();
  const cursorControls = useAnimationControls();

  useEffect(() => {
    const startTyping = async () => {
      await controls.start({
        width: "0%",
        transition: { duration: 0 }
      });

      // Start cursor blink animation
      cursorControls.start({
        opacity: [1, 0, 1],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop"
        }
      });

      // Type out each character
      for (let i = 1; i <= text.length; i++) {
        await controls.start({
          width: `${(i / text.length) * 100}%`,
          transition: {
            duration: 0.05,
            ease: "easeOut"
          }
        });
        // Move cursor position with slight offset for better positioning
        cursorControls.set({
          left: `calc(${(i / text.length) * 100}% - 2px)`
        });
        // Smaller pause between characters
        await new Promise(resolve => setTimeout(resolve, 30));
      }

      // Hide cursor after typing is complete
      setTimeout(() => {
        cursorControls.start({
          opacity: 0,
          transition: {
            duration: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        });
      }, 3000);
    };

    startTyping();
  }, [controls, cursorControls]);

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center"
    >
      <div className="relative mb-6 h-[40px] flex items-center justify-center">
        <div className="relative w-[220px]">
          <motion.div
            animate={controls}
            initial={{ width: "0%" }}
            className="text-4xl font-bold whitespace-nowrap overflow-hidden"
          >
            {text}
          </motion.div>
          <motion.div
            animate={cursorControls}
            initial={{ left: "0%", opacity: 1 }}
            className="absolute top-0 h-[40px] w-[2px] bg-white"
          />
        </div>
      </div>
      <Image
        src="/profile-pic.jpg"
        alt="Yash Desai - Software Engineer and Photographer based in NYC"
        width={200}
        height={200}
        className="rounded-full mb-4"
        priority
        placeholder="blur"
        blurDataURL={DEFAULT_BLUR_DATA_URL}
      />
      <p className="text-xl mb-8 max-w-2xl">
        Based in New York City. I write code, take pictures, ski, play tennis, and much more.
      </p>
    </motion.div>
  );
} 