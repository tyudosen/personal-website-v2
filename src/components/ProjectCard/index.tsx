"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  projectLink: string
  githubLink: string
  media?: {
    type: "image" | "video"
    src: string
    alt?: string
    poster?: string // For video thumbnail
  }
}

export function ProjectCard({
  title,
  description,
  tags,
  projectLink,
  githubLink,
  media,
}: ProjectCardProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const renderMedia = () => {
    if (!media) {
      // Default placeholder
      return (
        <div className="aspect-video w-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Preview</span>
        </div>
      )
    }

    if (media.type === "image") {
      return (
        <div className="relative w-full bg-muted flex justify-center align-middle p-8">
          <Image
            src={media.src || "/placeholder.svg"}
            alt={media.alt || `${title} screenshot`}
            height={200}
            width={200}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )
    }

    if (media.type === "video") {
      return (
        <div className="relative aspect-video w-full">
          <video
            className="w-full h-full object-cover"
            poster={media.poster}
            controls={isVideoPlaying}
            muted
            playsInline
            onPlay={handleVideoPlay}
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
              onClick={handleVideoPlay}
            >
              <div className="bg-white/90 rounded-full p-3 hover:bg-white transition-colors">
                <Play className="h-6 w-6 text-black ml-1" />
              </div>
            </div>
          )}
        </div>
      )
    }

    return null
  }

  return (
    <Card className="overflow-hidden h-full group hover:shadow-lg transition-shadow">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="overflow-hidden ">{renderMedia()}</div>
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="mb-2 font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>
          <div className="mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {projectLink && (
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link href={projectLink} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            )}
            {githubLink && (
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  View Github
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
