export interface DigestItem {
  id: string
  title: {
    en: string
    zh: string
  }
  url: string
  source: string
  summary: {
    en: string
    zh: string
  }
  date: string
}

export interface DigestDayGroup {
  date: string
  items: DigestItem[]
}

export interface DigestMonthGroup {
  month: string
  days: DigestDayGroup[]
}

export interface DigestYearGroup {
  year: string
  months: DigestMonthGroup[]
}
