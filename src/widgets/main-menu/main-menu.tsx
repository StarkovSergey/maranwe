import { cn } from '@/shared/utils/common-utils'
import React from 'react'
import { MenuTitle } from './ui/menu-title'
import { MenuItem } from './ui/menu-item'
import Link from 'next/link'
import { Footer } from './ui/footer'

export function MainMenu({ className }: { className?: string }) {
  return (
    <nav className={cn('flex flex-col overflow-auto p-4', className)}>
      <header className="hidden border-b pb-4 md:block">
        <Link href="/">
          <MenuTitle />
        </Link>
      </header>
      <ul className="grow py-4">
        <MenuItem href="/">About Project</MenuItem>
        <MenuItem href="/articles">Articles</MenuItem>
        <MenuItem href="/photos">Photos</MenuItem>
        <MenuItem href="/inspirations">Inspirations</MenuItem>
        <MenuItem href="/support">Support Project</MenuItem>
      </ul>
      <Footer />
    </nav>
  )
}
