import React from "react"
import SectionHeading from "./SectionHeading"
import { skills } from "@/data/profile"

export default function SkillsSection() {
  return (
    <section id="skills" className="my-12 pb-12 md:pt-16">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-10 md:space-y-6 md:p-4">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-2xl font-bold mb-4">{group.group}</h3>
            <ul className="flex flex-wrap">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-800 dark:bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-200 dark:text-gray-800 rounded font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
