import { hoursToMinSec } from './index'

const dataToTest = [
  { try: 1, expect: { minutes: 60, seconds: 0, txt: '60 min 0 sec' } },
  { try: 1.5, expect: { minutes: 90, seconds: 0, txt: '90 min 0 sec' } },
]
describe('Testing time functions', () => {
  dataToTest.forEach(data => {
    test('it should return correct conversion of decimal hours to min and sec', () => {
      expect(hoursToMinSec(data.try)).toStrictEqual(data.expect)
    })
  })
})
