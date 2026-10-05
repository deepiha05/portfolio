import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import SectionHeading from "./SectionHeading"
import RichText from "./RichText"
import { BsArrowUpRight } from "react-icons/bs"
import type { Project } from "@/data/profile"

type Props = { id: string; title: string; items: Project[] }

export default function ProjectsSection({ id, title, items }: Props) {
  return (
    <section id={id} className="my-12 pb-12 md:pt-16">
      <SectionHeading>{title}</SectionHeading>
      <div className="flex flex-col space-y-28 mt-10">
        {items.map((project, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <article className="flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2">
                <a href={project.links[0]?.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1000}
                    height={640}
                    unoptimized
                    className="rounded-xl shadow-xl hover:opacity-80 transition-opacity w-full h-auto"
                  />
                </a>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2">
                <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4">{project.meta}</p>
                <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  <RichText text={project.description} />
                </p>
                <ul className="flex flex-wrap mb-4" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-gray-200 dark:bg-stone-700 px-3 py-1 mr-2 mb-2 rounded text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      {link.label} <BsArrowUpRight className="ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}
