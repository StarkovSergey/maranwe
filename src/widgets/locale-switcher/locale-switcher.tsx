import { useLocale, useTranslations } from 'next-intl'
import { setUserLocale } from '@/services/locale'
import { Locale } from '@/i18n/config'
import { ChangeEvent } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.currentTarget.value as Locale
    setUserLocale(locale)
  }

  return (
    <select onChange={onChange} defaultValue={locale}>
      <option value="en">{t('en')}</option>
      <option value="ru">{t('ru')}</option>
    </select>
  )
}
