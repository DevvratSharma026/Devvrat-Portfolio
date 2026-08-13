import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Devvrat Sharma — Middleware & AI-native Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Devvrat Sharma — Associate System Engineer at IBM specialising in Oracle Integration Cloud, and full-stack developer building AI-native MERN products.",
      },
      { property: "og:title", content: "Devvrat Sharma — Portfolio" },
      {
        property: "og:description",
        content:
          "Middleware engineer at IBM · Oracle Integration Cloud · MERN + LLM full-stack developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AuroraBackground />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
