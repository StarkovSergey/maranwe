import { cn } from '@/shared/utils/common-utils'
import React from 'react'
import { MenuTitle } from '@/widgets/main-menu/ui/menu-title'
import MenuItem from '@/widgets/main-menu/ui/menu-item'

export function MainMenu({ className }: { className?: string }) {
  return (
    <nav className={cn('flex flex-col overflow-auto p-4', className)}>
      <header className="hidden border-b border-b-zinc-300 pb-4 md:block dark:border-b-black">
        <MenuTitle />
      </header>
      <ul className="grow py-4">
        <MenuItem href="/">About Project</MenuItem>
        <MenuItem href="/articles">Articles</MenuItem>
        <MenuItem href="/photos">Photos</MenuItem>
        <MenuItem href="/inspirations">Inspirations</MenuItem>
      </ul>
      <footer className="flex items-center gap-2"></footer>
    </nav>
  )
}
