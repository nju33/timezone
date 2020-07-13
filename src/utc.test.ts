import { getTzOffset } from './timezone/tz'
import { utc } from './utc'

test('getInUtc', () => {
  const ts =
    new Date('1970-12-03T12:12:12.345+09:00').getTime() +
    getTzOffset('Asia/Tokyo')
  const utcObject = utc(ts)

  expect(utcObject.iso8601).toBe('1970-12-03T12:12:12.345Z')
})
