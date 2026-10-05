import React from "react"
import { FaAward } from "react-icons/fa"
import SectionHeading from "./SectionHeading"
import RichText from "./RichText"
import { awards } from "@/data/profile"

export default function AwardsSection() {
  return (
    <section id="awards" className="my-12 pb-12 md:pb-24">
      <SectionHeading>Awards</SectionHeading>
      <ul className="mt-8 space-y-6 md:p-4">
        {awards.map((award) => (
          <li key={award.title} className="flex items-start">
            <FaAward className="text-teal-500 mt-1 mr-4 shrink-0" size={28} aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold">
                {award.title} <span className="text-base font-semibold text-teal-600 dark:text-teal-400">· {award.year}</span>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                <RichText text={award.detail} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
