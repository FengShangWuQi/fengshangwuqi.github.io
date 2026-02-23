import { readdirSync, readFileSync } from 'node:fs'
import { join, extname } from 'node:path'
import type { DigestItem, DigestDayGroup, DigestMonthGroup, DigestYearGroup } from '~/types/digest'

export default defineEventHandler((): DigestYearGroup[] => {
  const digestsDir = join(process.cwd(), 'public', 'digests')

  let files: string[]
  try {
    files = readdirSync(digestsDir)
  } catch {
    return []
  }

  const allItems: DigestItem[] = files
    .filter((file) => extname(file).toLowerCase() === '.json')
    .sort()
    .reverse()
    .reduce<DigestItem[]>((acc, file) => {
      try {
        const raw = readFileSync(join(digestsDir, file), 'utf-8')
        const items: DigestItem[] = JSON.parse(raw)
        acc.push(...items)
      } catch {
        // Skip malformed files
      }
      return acc
    }, [])

  const dayMap = new Map<string, DigestItem[]>()
  for (const item of allItems) {
    const existing = dayMap.get(item.date)
    if (existing) {
      existing.push(item)
    } else {
      dayMap.set(item.date, [item])
    }
  }

  const days: DigestDayGroup[] = Array.from(dayMap.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, items]) => ({ date, items }))

  const monthMap = new Map<string, DigestDayGroup[]>()
  for (const day of days) {
    const month = day.date.slice(0, 7)
    const existing = monthMap.get(month)
    if (existing) {
      existing.push(day)
    } else {
      monthMap.set(month, [day])
    }
  }

  const months: DigestMonthGroup[] = Array.from(monthMap.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([month, days]) => ({ month, days }))

  const yearMap = new Map<string, DigestMonthGroup[]>()
  for (const m of months) {
    const year = m.month.slice(0, 4)
    const existing = yearMap.get(year)
    if (existing) {
      existing.push(m)
    } else {
      yearMap.set(year, [m])
    }
  }

  return Array.from(yearMap.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, months]) => ({ year, months }))
})
