// import { getCachedGlobal } from '@/utilities/getGlobals'
// import Link from 'next/link'
// import React from 'react'
//
// import type { Footer } from '@/payload-types'
//
// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
// import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'
//
// export async function Footer() {
//   const footerData: Footer = await getCachedGlobal('footer', 1)()
//
//   const navItems = footerData?.navItems || []
//
//   return (
//     <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
//       <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-end">
//         {/* <Link className="flex items-center" href="/"> */}
//         {/*   <Logo /> */}
//         {/* </Link> */}
//
//         <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
//           <nav className="flex flex-col md:flex-row gap-4">
//             {navItems.map(({ link }, i) => {
//               return <CMSLink className="text-white" key={i} {...link} />
//             })}
//           </nav>
//           <ThemeSelector />
//         </div>
//       </div>
//     </footer>
//   )
// }

import { ThemeSelector } from "@/providers/Theme/ThemeSelector";


export function Footer() {
  return (
    <footer className="border-t py-4 sm:py-6">
      <div className="container px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Toyoabasi Udosen. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
              Built with Next.js, PayloadCMS and Tailwind CSS
            </p>
          </div>

          {/* Theme Toggle in Footer */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">Theme:</span>
            <ThemeSelector />
          </div>
        </div>

        {/* Mobile Theme Toggle */}
        <div className="flex justify-center sm:hidden">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Theme:</span>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}


