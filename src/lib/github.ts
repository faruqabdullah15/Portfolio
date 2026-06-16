import { portfolio } from "@/data/portfolio";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  link: string;
  featured: boolean;
  stars: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
};

/** Lowercase + strip trailing slashes so URLs/names compare reliably. */
function normalize(value: string): string {
  return value.trim().replace(/\/+$/, "").toLowerCase();
}

/**
 * Fetches the user's public GitHub repositories and maps them to projects.
 * Repos listed in `portfolio.excludedProjects` (by URL or name) are hidden.
 * Returns an empty array on any failure so the UI can fall back gracefully.
 */
export async function getGithubProjects(): Promise<Project[]> {
  const username = portfolio.githubUsername;
  if (!username) return [];

  const excluded = new Set(
    (portfolio.excludedProjects ?? []).map((entry) => normalize(entry)),
  );

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: "application/vnd.github+json" },
        // Revalidate hourly so new repos appear without a manual redeploy.
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return [];

    const repos = (await res.json()) as GitHubRepo[];

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .filter(
        (repo) =>
          !excluded.has(normalize(repo.html_url)) &&
          !excluded.has(normalize(repo.name)),
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map((repo) => ({
        title: repo.name,
        description: repo.description?.trim() || "No description provided.",
        tools: [repo.language, ...(repo.topics ?? [])].filter(
          (t): t is string => Boolean(t),
        ),
        link: repo.html_url,
        featured: repo.stargazers_count > 0,
        stars: repo.stargazers_count,
      }));
  } catch {
    return [];
  }
}
