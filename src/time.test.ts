import { diffTime } from './time'

describe('diffTime', () => {
  test('time', () => {
    const endTs = new Date('2020-01-02:12:43:01.999Z').getTime()
    const startTs = new Date('2020-01-01:19:59:35.058Z').getTime()

    expect(diffTime(endTs, startTs)).toBe('16:43:26.060')
  })

  test('throw', () => {
    expect(() => diffTime(1, 2)).toThrow(TypeError)
  })
})
