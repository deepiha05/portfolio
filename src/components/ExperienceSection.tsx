import React from "react"
import SectionHeading from "./SectionHeading"
import RichText from "./RichText"
import { experience } from "@/data/profile"

export default function ExperienceSection() {
  return (
    <section id="experience" className="my-12 pb-12 md:pt-16">
      <SectionHeading>Experience</SectionHeading>
      <div className="mt-8 space-y-12">
        {experience.map((job, idx) => (
          <article key={idx} className="border-l-4 border-teal-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-2xl font-bold">{job.company}</h3>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">{job.period}</span>
            </div>
            <p className="text-lg italic text-neutral-600 dark:text-neutral-400 mb-4">{job.role}</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {job.points.map((point, i) => (
                <li key={i}>
                  <RichText text={point} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
