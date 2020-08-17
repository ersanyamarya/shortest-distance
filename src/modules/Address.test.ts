import { Address } from './index'

describe('Testing Address Class', () => {
  const add1 = new Address(51.2348, 6.825636, 'Metrostrasse 12, 40235 Düsseldorf')
  const add2 = new Address(51.241394, 6.830576, 'Ludenberger Str. 1, 40629 Düsseldorf')

  test('it should calculate the correct distance between points', () => {
    expect(add1.distance(add2)).toBe(810.7745768900885)
    expect(add1.distance(add2)).toBe(add2.distance(add1))
  })
})
