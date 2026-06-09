"use client";

import Section from "./Section";
import { FadeInSection } from "./motion";
import { portfolio } from "@/data/portfolio";

function TagGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-500/30 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Expertise() {
  const { domains, techStack, tools } = portfolio.expertise;

  return (
    <Section id="expertise" title="Expertise" subtitle="Skills & Tools">
      <FadeInSection>
        <div className="grid gap-6 md:grid-cols-3">
          <TagGroup title="Domains" items={domains} />
          <TagGroup title="Tech Stack" items={techStack} />
          <TagGroup title="Tools" items={tools} />
        </div>
      </FadeInSection>
    </Section>
  );
}
