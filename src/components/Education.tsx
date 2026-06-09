"use client";

import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./motion";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Qualifications">
      <StaggerContainer className="space-y-6">
        {portfolio.education.map((edu) => (
          <StaggerItem key={edu.degree}>
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/20 hover:bg-white/[0.04] md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="mt-1 text-violet-400">{edu.institution}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{edu.details}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
                  {edu.period}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
