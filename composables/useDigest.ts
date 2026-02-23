import type { DigestYearGroup } from '~/types/digest'

export const useDigest = () => {
  const years = useState<DigestYearGroup[]>('digest-years', () => [])
  const expandedMonths = useState<Set<string>>('digest-expanded-months', () => new Set())

  const toggleMonth = (month: string) => {
    const next = new Set(expandedMonths.value)
    if (next.has(month)) {
      next.delete(month)
    } else {
      next.add(month)
    }
    expandedMonths.value = next
  }

  const isMonthExpanded = (month: string) => expandedMonths.value.has(month)

  const initExpanded = () => {
    if (expandedMonths.value.size === 0 && years.value.length > 0 && years.value[0].months.length > 0) {
      expandedMonths.value = new Set([years.value[0].months[0].month])
    }
  }

  return {
    years,
    expandedMonths: readonly(expandedMonths),
    toggleMonth,
    isMonthExpanded,
    initExpanded,
  }
}
