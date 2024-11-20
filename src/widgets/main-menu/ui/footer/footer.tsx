'use client'
import { TelegramIcon } from '@/shared/icon-components/telegram-icon'
import { YouTubeIcon } from '@/shared/icon-components/youtube-icon'
import LocaleSwitcher from '@/widgets/locale-switcher/locale-switcher'

export const Footer = () => {
  return (
    <footer>
      <LocaleSwitcher />
      <div className="flex items-center gap-2">
        <YouTubeIcon width={30} height={30} />
        <TelegramIcon width={25} height={25} />
      </div>
    </footer>
  )
}
