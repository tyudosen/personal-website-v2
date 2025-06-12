// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
//
// import type { Header } from '@/payload-types'
//
// import { Logo } from '@/components/Logo/Logo'
// import { HeaderNav } from './Nav'
//
// interface HeaderClientProps {
//   data: Header
// }
//
// export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
//   /* Storing the value in a useState to avoid hydration errors */
//   const [theme, setTheme] = useState<string | null>(null)
//   const { headerTheme, setHeaderTheme } = useHeaderTheme()
//   const pathname = usePathname()
//
//   useEffect(() => {
//     setHeaderTheme(null)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname])
//
//   useEffect(() => {
//     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [headerTheme])
//
//   return (
//     <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
//       <div className="py-8 flex justify-between">
//         <Link href="/">
//           <Logo loading="eager" priority="high" className="invert dark:invert-0" />
//         </Link>
//         <HeaderNav data={data} />
//       </div>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSelector } from "@/providers/Theme/ThemeSelector"

export function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <ThemeSelector />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSelector />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 space-y-2">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

