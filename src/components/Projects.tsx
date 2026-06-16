import Section from "./Section";
import ProjectsGrid from "./ProjectsGrid";
import { getGithubProjects, type Project } from "@/lib/github";
import { portfolio } from "@/data/portfolio";

function normalize(value: string): string {
  return value.trim().replace(/\/+$/, "").toLowerCase();
}

export default async function Projects() {
  const githubProjects = await getGithubProjects();

  const excluded = new Set(
    (portfolio.excludedProjects ?? []).map((entry) => normalize(entry)),
  );

  // Fallback to the manual list (also respecting exclusions) if GitHub is unavailable.
  const fallback: Project[] = portfolio.projects
    .filter((p) => !excluded.has(normalize(p.link)))
    .map((p) => ({ ...p, stars: 0 }));

  const projects = githubProjects.length > 0 ? githubProjects : fallback;

  return (
    <Section id="projects" title="Featured Projects" subtitle="Portfolio">
      <ProjectsGrid projects={projects} />
    </Section>
  );
}
