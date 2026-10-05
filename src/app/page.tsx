import HeroSection from "@/components/HeroSection"
import JourneySection from "@/components/JourneySection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import AwardsSection from "@/components/AwardsSection"
import { research, projects } from "@/data/profile"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <JourneySection />
      <ExperienceSection />
      <ProjectsSection id="research" title="Research" items={research} />
      <ProjectsSection id="projects" title="Projects" items={projects} />
      <SkillsSection />
      <AwardsSection />
    </main>
  )
}
