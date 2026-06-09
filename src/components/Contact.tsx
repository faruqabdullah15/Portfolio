"use client";

import { Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { FadeInSection } from "./motion";
import SocialLinks from "./SocialLinks";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Get Connected" subtitle="Contact">
      <FadeInSection>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 p-8 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="relative z-10">
            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build something great together
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              Open to collaborations, freelance projects, and full-time opportunities.
              Drop me a message — I typically respond within 24 hours.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a
                href={`mailto:${portfolio.email}`}
                className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-white"
              >
                <Mail size={18} className="text-violet-400" />
                {portfolio.email}
              </a>
              <span className="inline-flex items-center gap-2 text-zinc-300">
                <MapPin size={18} className="text-violet-400" />
                {portfolio.location}
              </span>
            </div>

            <SocialLinks />

            <a
              href={`mailto:${portfolio.email}`}
              className="mt-10 inline-block rounded-full bg-white px-10 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Send an email
            </a>
          </div>
        </div>
      </FadeInSection>
    </Section>
  );
}
