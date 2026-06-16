import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
            {portfolio.logo}
          </span>
          <span className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
