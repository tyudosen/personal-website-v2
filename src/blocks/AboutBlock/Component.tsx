import { CodeSnippet } from "@/components/CodeSnippet"
import { Badge } from "@/components/ui/badge"

export function AboutBlock() {
  return (
    <section id="about" className="container px-4 py-12 md:py-16">
      <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold tracking-tight">About Me</h2>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            I'm a software engineer with a passion for building clean, efficient, and user-friendly applications. With
            expertise in modern web technologies, I focus on creating scalable solutions that solve real-world problems.
          </p>
          {/* <p className="text-muted-foreground text-sm sm:text-base leading-relaxed"> */}
          {/*   When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or */}
          {/*   sharing knowledge through technical writing and mentorship. */}
          {/* </p> */}
          <CodeSnippet
            code={`
function solveProblems(coffee) {
  if (!coffee) {
    return getMeCoffee();
  }
  return writeCleanCode();
}`}
          />
        </div>
        <div>
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-medium">Skills</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge variant="secondary" className="text-xs">
              JavaScript
            </Badge>
            <Badge variant="secondary" className="text-xs">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="text-xs">
              React
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Next.js
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Node.js
            </Badge>
            <Badge variant="secondary" className="text-xs">
              GraphQL
            </Badge>
            <Badge variant="secondary" className="text-xs">
              REST APIs
            </Badge>
            <Badge variant="secondary" className="text-xs">
              SQL
            </Badge>
            <Badge variant="secondary" className="text-xs">
              NoSQL
            </Badge>
            <Badge variant="secondary" className="text-xs">
              AWS
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Docker
            </Badge>
            <Badge variant="secondary" className="text-xs">
              CI/CD
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

