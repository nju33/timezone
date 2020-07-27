const ONE_MILLISECOND = 1
const ONE_SECOND = 1000 * ONE_MILLISECOND
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE

export type DiffTimeFormatKinds = 'HH' | 'HH:mm' | 'HH:mm:ss' | 'HH:mm:ss.SSS'

/**
 *
 * @param endTs - a timestamp
 * @param startTs - a timestamp
 * @param format - output format
 * @returns `hh:MM:ss.SSS` syntax time
 *
 * @example
 *
 * ```ts
 * // If endTs is in the past, an error occurs
 * const endTs = new Date('2020-01-01:19:59:35.058Z').getTime()
 * const startTs = new Date('2020-01-02:12:43:01.999Z').getTime()
 * DiffTimeFormat(endTs, startTs)
 * // TypeError: endTs should be in the future rather than startTs
 *
 * // The following is correct
 * const endTs = new Date('2020-01-02:12:43:01.999Z').getTime()
 * const startTs = new Date('2020-01-01:19:59:35.058Z').getTime()
 * DiffTimeFormat(endTs, startTs)
 * ```
 */
export function diffTimeFormat(
  endTs: number,
  startTs: number,
  format: DiffTimeFormatKinds = 'HH:mm:ss.SSS'
): string {
  if (startTs > endTs) {
    throw new TypeError('`endTs` should be in the future rather than `startTs`')
  }

  const diffTimeByTs = endTs - startTs

  const diffHours = diffTimeByTs / ONE_HOUR
  const diffHoursByString = `00${Math.floor(diffHours)}`.slice(-2)
  if (format === 'HH') {
    return diffHoursByString
  }

  const diffMinutes =
    (ONE_HOUR * (diffHours - Math.floor(diffHours))) / ONE_MINUTE
  const diffMinuteByString = `00${Math.floor(diffMinutes)}`.slice(-2)
  if (format === 'HH:mm') {
    return `${diffHoursByString}:${diffMinuteByString}`
  }

  const diffSeconds =
    (ONE_MINUTE * (diffMinutes - Math.floor(diffMinutes))) / ONE_SECOND
  const diffSecondByString = `00${Math.floor(diffSeconds)}`.slice(-2)
  if (format === 'HH:mm:ss') {
    return `${diffHoursByString}:${diffMinuteByString}:${diffSecondByString}`
  }

  const diffMseconds =
    (ONE_SECOND * (diffSeconds - Math.floor(diffMinutes))) / ONE_MILLISECOND
  const diffMsecondByString = `000${Math.floor(diffMseconds)}`.slice(-3)

  return `${diffHoursByString}:${diffMinuteByString}:${diffSecondByString}.${diffMsecondByString}`
}

/**
 * @deprecated Use `diffTimeFormat` instead
 */
export { diffTimeFormat as diffTime }

export function diffStringTime(
  end: string,
  start: string,
  format: DiffTimeFormatKinds = 'HH:mm:ss.SSS'
): number {
  const splittedStart = start.split(/:|\./)
  const splittedEnd = end.split(/:|\./)
  const defaultParts = ['00', '00', '00', '000']
  const margeArray = (array: string[]): string[] => {
    const cloned = defaultParts

    array.forEach((item, index) => {
      cloned[index] = item
    })

    return cloned
  }

  const mergedStart = margeArray(splittedStart)
  const normalizedStartTime = `1970-01-01T${mergedStart
    .slice(0, 3)
    .join(':')}.${mergedStart[mergedStart.length - 1]}`
  const startTs = new Date(normalizedStartTime).getTime()

  const mergedEnd = margeArray(splittedEnd)
  const normalizedEndTime = `1970-01-01T${mergedEnd.slice(0, 3).join(':')}.${
    mergedStart[mergedStart.length - 1]
  }`
  const endTs = new Date(normalizedEndTime).getTime()

  const diffTime = endTs - startTs

  switch (format) {
    case 'HH': {
      return Math.floor(diffTime / ONE_HOUR) * ONE_HOUR
    }
    case 'HH:mm': {
      return Math.floor(diffTime / ONE_MINUTE) * ONE_MINUTE
    }
    case 'HH:mm:ss': {
      return Math.floor(diffTime / ONE_SECOND) * ONE_SECOND
    }
    case 'HH:mm:ss.SSS': {
      return Math.floor(diffTime / ONE_MILLISECOND) * ONE_MILLISECOND
    }
  }
}
