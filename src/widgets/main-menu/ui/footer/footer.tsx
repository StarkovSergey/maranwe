import { TelegramIcon } from '@/shared/icon-components/telegram-icon'
import { YouTubeIcon } from '@/shared/icon-components/youtube-icon'

export const Footer = () => {
  return (
    <footer>
      <div className="flex items-center gap-2">
        <YouTubeIcon width={30} height={30} />
        <TelegramIcon width={25} height={25} />
      </div>
    </footer>
  )
}
