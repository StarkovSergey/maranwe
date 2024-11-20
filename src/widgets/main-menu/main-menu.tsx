import { cn } from '@/shared/utils/common-utils'
import React from 'react'
import { MenuTitle } from './ui/menu-title'
import { MenuItem } from './ui/menu-item'
import Link from 'next/link'
import { Footer } from './ui/footer'
import { useTranslations } from 'next-intl'

const menuItems = [
  { href: '/', label: 'About Project' },
  { href: '/articles', label: 'Articles' },
  { href: '/photos', label: 'Photos' },
  { href: '/inspirations', label: 'Inspirations' },
  { href: '/support', label: 'Support Project' },
]

export function MainMenu({ className }: { className?: string }) {
  const t = useTranslations('MainMenu')

  return (
    <nav className={cn('flex flex-col overflow-auto p-4', className)}>
      <header className="hidden border-b pb-4 md:block">
        <Link href="/">
          <MenuTitle />
        </Link>
      </header>
      <ul className="grow py-4">
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {t(item.label)}
          </MenuItem>
        ))}
      </ul>
      <Footer />
    </nav>
  )
}
