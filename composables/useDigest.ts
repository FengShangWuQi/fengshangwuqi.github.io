import type { DigestYearGroup } from '~/types/digest'

export const useDigest = () => {
  const years = useState<DigestYearGroup[]>('digest-years', () => [])
  const expandedMonth = useState<string | null>('digest-expanded-month', () => null)

  const toggleMonth = (month: string) => {
    expandedMonth.value = expandedMonth.value === month ? null : month
  }

  const isMonthExpanded = (month: string) => expandedMonth.value === month

  const initExpanded = () => {
    if (!expandedMonth.value && years.value.length > 0 && years.value[0].months.length > 0) {
      expandedMonth.value = years.value[0].months[0].month
    }
  }

  return {
    years,
    expandedMonth: readonly(expandedMonth),
    toggleMonth,
    isMonthExpanded,
    initExpanded,
  }
}
