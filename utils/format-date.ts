import type { Locale } from '~/types/locale'

const LOCALE_MAP: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
}

const formatters = new Map<string, Intl.DateTimeFormat>()

const getFormatter = (key: string, locale: string, options: Intl.DateTimeFormatOptions) => {
  let fmt = formatters.get(key)
  if (!fmt) {
    fmt = new Intl.DateTimeFormat(locale, options)
    formatters.set(key, fmt)
  }
  return fmt
}

export const formatDate = (dateStr: string, locale: Locale) => {
  const intlLocale = LOCALE_MAP[locale]
  const [year, month, day] = dateStr.split('-').map(Number)
  return getFormatter(`date:${intlLocale}`, intlLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(year, month - 1, day))
}

export const formatMonth = (monthStr: string, locale: Locale) => {
  const intlLocale = LOCALE_MAP[locale]
  const [year, month] = monthStr.split('-').map(Number)
  return getFormatter(`month:${intlLocale}`, intlLocale, {
    year: 'numeric',
    month: 'long',
  }).format(new Date(year, month - 1, 1))
}
