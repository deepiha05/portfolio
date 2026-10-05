import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { profile } from "@/data/profile"

const iconClass = "hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100"

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
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
