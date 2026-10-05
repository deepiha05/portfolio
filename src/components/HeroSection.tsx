"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa"
import { profile } from "@/data/profile"

const buttonClass =
  "flex items-center justify-center w-40 text-sm md:text-base font-semibold px-4 py-2 md:px-6 md:py-3 rounded shadow transition-colors"

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-8 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          {profile.headshot ? (
            <Image
              src={profile.headshot}
              alt={`Photo of ${profile.name}`}
              width={325}
              height={325}
              className="rounded-full shadow-2xl object-cover aspect-square"
              priority={true}
            />
          ) : (
            <div
              aria-hidden="true"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-7xl font-bold"
            >
              DS
            </div>
          )}
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m {profile.firstName}</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            An{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">Edge AI and ML Systems Engineer</span>.
            <br />
            Computer Science research at <span className="font-semibold">IIT Kharagpur</span>, now a professional
            Master&#39;s at <span className="font-semibold">UC Irvine</span>.
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {profile.resume && (
              <a
                href={profile.resume}
                download="Resume_Deepiha_Sivakumar.pdf"
                className={`${buttonClass} text-neutral-100 bg-teal-600 hover:bg-teal-700`}
              >
                <FaDownload className="mr-2" /> Resume
              </a>
            )}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass} text-neutral-100 bg-black hover:bg-neutral-700 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300`}
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass} text-neutral-100 bg-blue-600 hover:bg-blue-700`}
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link to="journey" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer">
          <HiArrowDown size={40} className="animate-bounce" aria-label="Scroll to journey" />
        </Link>
      </div>
    </section>
  )
}
