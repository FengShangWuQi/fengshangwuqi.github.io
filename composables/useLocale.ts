import type { Locale, Messages } from '~/types/locale'
import en from '~/locales/en.json'
import zh from '~/locales/zh.json'

const messages: Record<Locale, Messages> = { en, zh }

export const useLocale = () => {
  const locale = useState<Locale>('locale', () => 'en')
  const localeInitialized = useState('locale-initialized', () => false)

  if (import.meta.client && !localeInitialized.value) {
    locale.value = navigator.language.startsWith('zh') ? 'zh' : 'en'
    localeInitialized.value = true
  }

  const t = (key: string) => messages[locale.value][key] ?? key

  const switchLocale = () => {
    locale.value = locale.value === 'en' ? 'zh' : 'en'
  }

  useHead({
    htmlAttrs: { lang: locale },
  })

  return {
    locale: readonly(locale),
    t,
    switchLocale,
  }
}
