import { diffTimeFormat } from './time'

describe('diffTimeFormat', () => {
  test('time', () => {
    const endTs = new Date('2020-01-02:12:43:01.999Z').getTime()
    const startTs = new Date('2020-01-01:19:59:35.058Z').getTime()

    expect(diffTimeFormat(endTs, startTs)).toBe('16:43:26.060')
  })

  test('throw', () => {
    expect(() => diffTimeFormat(1, 2)).toThrow(TypeError)
  })
})
