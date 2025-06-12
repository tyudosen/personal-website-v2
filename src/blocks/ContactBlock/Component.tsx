import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactBlock() {
  return (
    <section id="contact" className="container px-4 py-12 md:py-16">
      <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold tracking-tight">Contact</h2>
      <div className="mx-auto max-w-md space-y-4 sm:space-y-6">
        <p className="text-center text-muted-foreground text-sm sm:text-base leading-relaxed">
          Interested in working together? Feel free to reach out through any of the channels below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="mailto:tyudosen@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="https://linkedin.com/in/toyoabasi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="https://github.com/tyudosen" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

