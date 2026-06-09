"use client";

import { Briefcase } from "lucide-react";
import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./motion";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Career">
      <StaggerContainer className="relative space-y-8">
        <div className="absolute left-[23px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent md:block" />
        {portfolio.experience.map((exp) => (
          <StaggerItem key={exp.company + exp.role}>
            <div className="relative flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="hidden md:flex md:w-12 md:shrink-0 md:justify-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-[#0a0a0f] text-violet-400">
                  <Briefcase size={20} />
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/20 md:p-8">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-violet-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-zinc-500">{exp.period}</span>
                </div>
                <p className="mb-4 leading-relaxed text-zinc-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
