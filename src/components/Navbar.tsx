"use client"
import React, { useEffect, useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { profile } from "@/data/profile"

const NAV_ITEMS = [
  { label: "Journey", page: "journey" },
  { label: "Experience", page: "experience" },
  { label: "Skills", page: "skills" },
  { label: "Research", page: "research" },
  { label: "Projects", page: "projects" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [navbar, setNavbar] = useState(false)
  useEffect(() => setMounted(true), [])
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <nav className="justify-between md:items-center md:flex" aria-label="Main">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-2xl font-bold">{profile.name}</span>
          </Link>
          <button
            className="md:hidden p-2 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
            aria-label={navbar ? "Close menu" : "Open menu"}
            aria-expanded={navbar}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <div className={`pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
          <div className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                className="block lg:inline-block hover:text-neutral-500 cursor-pointer"
                activeClass="text-teal-600 dark:text-teal-400"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="bg-slate-100 p-2 rounded-xl"
                aria-label={currentTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {currentTheme === "dark" ? <RiSunLine size={25} color="black" /> : <RiMoonFill size={25} />}
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
