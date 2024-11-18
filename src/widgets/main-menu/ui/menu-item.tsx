'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/shared/utils/common-utils'

type Props = {
  children: ReactNode
  href: string
}

export function MenuItem({ children, href }: Props) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <li>
      <Link
        className={cn(
          'block rounded-md p-2 hover:text-foreground hover:opacity-70',
          isActive &&
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:opacity-100'
        )}
        href={href}>
        {children}
      </Link>
    </li>
  )
}
