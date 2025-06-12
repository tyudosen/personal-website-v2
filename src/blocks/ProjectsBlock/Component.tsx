import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsBlock() {
  return (
    <section id="projects" className="container px-4 py-12 md:py-16">
      <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold tracking-tight">Projects</h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="RAG AI Chat App"
          description="A retrieval augumented generation AI chat app built with NextJs & Vercel AI SDK."
          tags={["React", "NextJS", "PostgresSQL", "Vercel AI SDK"]}
          projectLink="https://ai-chat-app-three-drab.vercel.app/"
          githubLink="https://github.com/tyudosen/ai-chat-app"
          media={{
            type: "image",
            src: "./chat.svg",
            alt: "Project Alpha dashboard screenshot",
          }}
        />
      </div>
    </section>
  )
}

