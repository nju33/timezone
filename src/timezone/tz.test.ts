import { getTzOffset } from './tz'

test('getTzOffset', () => {
  expect(getTzOffset('Asia/Tokyo')).toBe(9 * (60 * 60 * 1000))
})
