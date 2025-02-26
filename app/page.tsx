"use client"

import { Profile } from "@/components/Profile"
import { ContactLinks } from "@/components/ContactLinks"
import { ExperienceSection } from "@/components/ExperienceSection"
import { LinkCard } from "@/components/LinkCard"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Profile />
      <ContactLinks />
      <ExperienceSection />
      
      {/* Link Cards */}
      <LinkCard 
        href="/photography" 
        title="Photography" 
      />
      
      <LinkCard 
        href="/thoughts" 
        title="Thoughts" 
        className="mt-8" 
      />
    </div>
  )
}

