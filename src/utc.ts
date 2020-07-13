/**
 * Constructor to create an object that handles the UTC
 *
 * @param ts - A timestamp
 *
 * @example
 *
 * ```
 * utc(ts).iso8601 === '2020-01-01T00:00:00.000Z'
 * ```
 */
export function utc(
  ts: number
): {
  date: number
  hours: number
  iso8601: string
  milliSeconds: number
  minutes: number
  month: number
  seconds: number
  year: number
} {
  const date = new Date(ts)

  return {
    get iso8601(): string {
      const year = `${this.year}`
      const month = `00${this.month + 1}`.slice(-2)
      const date = `00${this.date}`.slice(-2)
      const hours = `00${this.hours}`.slice(-2)
      const minutes = `00${this.minutes}`.slice(-2)
      const seconds = `00${this.seconds}`.slice(-2)
      const milliSeconds = `00${this.milliSeconds}`.slice(-3)

      return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}.${milliSeconds}Z`
    },
    get year(): number {
      return date.getUTCFullYear()
    },
    get month(): number {
      return date.getUTCMonth()
    },
    get date(): number {
      return date.getUTCDate()
    },
    get hours(): number {
      return date.getUTCHours()
    },
    get minutes(): number {
      return date.getUTCMinutes()
    },
    get seconds(): number {
      return date.getUTCSeconds()
    },
    get milliSeconds(): number {
      return date.getUTCMilliseconds()
    }
  }
}
