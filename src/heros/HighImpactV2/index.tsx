import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HighImpactHeroV2() {
  return (
    <section className="container px-4 py-16 sm:py-24 md:py-32">
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
          <AvatarImage src="./avatar.jpeg" alt="Toyoabasi Udosen" />
          <AvatarFallback>TU</AvatarFallback>
        </Avatar>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Toyoabasi Udosen</h1>
          <p className="text-muted-foreground text-lg sm:text-xl">Senior Software Engineer</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11" asChild>
            <Link href="https://github.com/tyudosen" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11" asChild>
            <Link href="https://linkedin.com/in/toyoabasi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11" asChild>
            <Link href="mailto:tyudosen@gmail.com">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


