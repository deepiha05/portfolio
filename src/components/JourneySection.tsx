import React from "react"
import SectionHeading from "./SectionHeading"
import { journey } from "@/data/profile"

export default function JourneySection() {
  return (
    <section id="journey" className="my-12 pb-12">
      <SectionHeading>My Journey</SectionHeading>

      {/* Mobile: vertical */}
      <ol className="flex flex-col items-start md:hidden mt-8 pl-4">
        {journey.map((step, idx) => (
          <li key={idx} className="flex flex-row items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 rounded-full bg-teal-500 mt-1 shrink-0" />
              {idx < journey.length - 1 && <div className="w-0.5 h-16 bg-teal-500 opacity-40" />}
            </div>
            <div className="pb-10">
              <span className="text-sm font-semibold text-teal-500 uppercase tracking-widest">{step.year}</span>
              <h3 className="font-bold text-xl leading-tight">{step.role}</h3>
              <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400">{step.place}</p>
              <p className="text-base text-neutral-500 dark:text-neutral-400 mt-1">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal */}
      <ol className="hidden md:flex flex-row items-start justify-between mt-10 relative">
        <div className="absolute top-[10px] left-0 right-0 h-0.5 bg-teal-500 opacity-30 z-0" aria-hidden="true" />
        {journey.map((step, idx) => (
          <li key={idx} className="flex flex-col items-center flex-1 relative z-10 px-3">
            <div className="w-5 h-5 rounded-full bg-teal-500 mb-4 shrink-0" />
            <span className="text-sm font-semibold text-teal-500 uppercase tracking-widest mb-1">{step.year}</span>
            <h3 className="font-bold text-lg text-center leading-snug">{step.role}</h3>
            <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400 text-center mt-1">{step.place}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 leading-relaxed">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
