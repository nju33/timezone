import { diffStringTime, diffTimeFormat } from './time'

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

describe('diffStringTime', () => {
  test('HH', () => {
    expect(diffStringTime('01:01', '00:00', 'HH')).toBe(60 * 60 * 1000)
    expect(diffStringTime('00:59', '00:00', 'HH')).toBe(0)
  })

  test('HH:mm', () => {
    expect(diffStringTime('00:01:12', '00:00:00', 'HH:mm')).toBe(60 * 1000)
    expect(diffStringTime('00:00:48', '00:00:00', 'HH:mm')).toBe(0)
  })

  test('HH:mm:ss', () => {
    expect(diffStringTime('00:00:01.123', '00:00:00.000', 'HH:mm:ss')).toBe(
      1000
    )
    expect(diffStringTime('00:00:00.123', '00:00:00.000', 'HH:mm:ss')).toBe(0)
  })

  test('HH:mm:ss.SSS', () => {
    expect(diffStringTime('00:00:00.123', '00:00:00.000', 'HH:mm:ss.SSS')).toBe(
      123
    )
  })
})
