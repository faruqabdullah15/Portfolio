"use client";

import { ExternalLink, Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./motion";
import type { Project } from "@/lib/github";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-zinc-400">Projects coming soon.</p>;
  }

  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <StaggerItem key={project.link}>
          <article
            className={`group flex h-full flex-col rounded-2xl border bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] md:p-8 ${
              project.featured
                ? "border-violet-500/20 shadow-lg shadow-violet-500/5"
                : "border-white/5 hover:border-white/10"
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-violet-300">
                {project.title}
              </h3>
              {project.featured && (
                <span className="flex shrink-0 items-center gap-1 text-violet-400">
                  <Star size={16} className="fill-violet-400 text-violet-400" />
                  {project.stars > 0 && (
                    <span className="text-xs font-medium">{project.stars}</span>
                  )}
                </span>
              )}
            </div>
            <p className="mb-6 flex-1 leading-relaxed text-zinc-400">
              {project.description}
            </p>
            {project.tools.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View project
              <ExternalLink size={14} />
            </a>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
