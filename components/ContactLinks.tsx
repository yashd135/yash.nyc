'use client';

import { FileText, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

function ContactLink({ href, label, icon, isExternal = true }: ContactLinkProps) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="icon-button"
        aria-label={label}
      >
        {icon}
      </a>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}

export function ContactLinks() {
  return (
    <motion.div
      className="flex gap-8 mb-12"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ContactLink
        href="https://drive.google.com/file/d/1jzsgVpmaWer_ora63Mh6HD7fpl-fCWu6/view?usp=sharing"
        label="Resume"
        icon={<FileText size={24} />}
      />
      <ContactLink
        href="https://linkedin.com/in/yashd1"
        label="LinkedIn"
        icon={<LinkedinIcon size={24} />}
      />
      <ContactLink
        href="mailto:yashd135@gmail.com"
        label="Email"
        icon={<Mail size={24} />}
        isExternal={false}
      />
    </motion.div>
  );
} 