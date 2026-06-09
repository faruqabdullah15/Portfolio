"use client";

import Section from "./Section";
import { FadeInSection } from "./motion";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Introduction">
      <FadeInSection>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-zinc-300">{portfolio.shortDescription}</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Interests
            </h3>
            <ul className="flex flex-wrap gap-2">
              {portfolio.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </Section>
  );
}
