"use client";

import { Users, Heart } from "lucide-react";
import Section from "./Section";
import { StaggerContainer, StaggerItem } from "./motion";
import { portfolio } from "@/data/portfolio";

export default function Activities() {
  return (
    <Section id="activities" title="Beyond Code" subtitle="Activities & Impact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Users size={20} className="text-violet-400" />
            Extracurricular Activities
          </h3>
          <StaggerContainer className="space-y-4">
            {portfolio.extracurricular.map((item) => (
              <StaggerItem key={item.organization}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-medium text-white">{item.organization}</h4>
                    <span className="text-xs text-zinc-500">{item.period}</span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-violet-400">{item.role}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Heart size={20} className="text-rose-400" />
            Social Work
          </h3>
          <StaggerContainer className="space-y-4">
            {portfolio.socialWork.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <span className="text-xs text-zinc-500">{item.period}</span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-rose-400">{item.organization}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}
