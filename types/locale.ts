export type Locale = 'en' | 'zh'

export type Messages = Record<string, string>
export type MessageKey = keyof typeof import('~/locales/en.json')
