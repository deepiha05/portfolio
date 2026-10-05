import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { profile } from "@/data/profile"

const iconClass = "hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100"

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <div className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:justify-center md:gap-8">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center hover:underline">
            <AiOutlineMail className="mr-2" size={22} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="inline-flex items-center hover:underline">
            <AiOutlinePhone className="mr-2" size={22} /> {profile.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <p className="text-neutral-500 dark:text-neutral-100">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-row items-center justify-center space-x-2 mt-2 md:mt-0">
          <a href={profile.github} rel="noreferrer" target="_blank" aria-label="GitHub">
            <AiOutlineGithub className={iconClass} size={30} />
          </a>
          <a href={profile.linkedin} rel="noreferrer" target="_blank" aria-label="LinkedIn">
            <AiOutlineLinkedin className={iconClass} size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}
