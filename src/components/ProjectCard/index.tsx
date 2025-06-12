import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full" >
      <CardContent className="p-0 flex flex-col h-full" >
        <div className="aspect-video w-full bg-muted" />
        <div className="p-4 sm:p-6 flex-1 flex flex-col" >
          <h3 className="mb-2 font-medium text-sm sm:text-base" > {title} </h3>
          < p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1" > {description} </p>
          < div className="mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2" >
            {
              tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs" >
                  {tag}
                </Badge>
              ))
            }
          </div>
          < Button variant="outline" size="sm" className="w-full text-xs sm:text-sm" asChild >
            <Link href={link} target="_blank" rel="noopener noreferrer" >
              View Project
              < ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

