import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-violet-400">
            {subtitle ?? "Section"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
