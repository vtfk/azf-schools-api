const schoolsInfo = require('vtfk-schools-info')
const getSchools = require('../lib/get-schools')

test('Search for "Bø vidaregåande skule" should return Array of 1 item', () => {
  const school = schoolsInfo({ fullName: 'Bø vidaregåande skule' })
  const result = getSchools(school)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
})

test('Search for "Bamble videregående skole" should return Array of 2 items', () => {
  const schools = schoolsInfo({ officialName: 'Bamble videregående skole' })
  const result = getSchools(schools)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
})

test('Search for a school that doesnt exist should return Array of 0 items', () => {
  const schools = schoolsInfo({ officialName: 'Livets harde skole' })
  const result = getSchools(schools)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(0)
})

test('Search for "Bamble videregående skole", with limit set to 1, should return an object with the first school in the list', () => {
  const schools = schoolsInfo({ officialName: 'Bamble videregående skole' })
  const result = getSchools(schools, 1)
  expect(typeof result).toBe('object')
  expect(typeof result.shortName).toBe('string')
})

test('Search for a school that doesnt exist, with limit set to 1, should return a empty object', () => {
  const schools = schoolsInfo({ officialName: 'Livets harde skole' })
  const result = getSchools(schools, 1)
  expect(typeof result).toBe('object')
  expect(typeof result.shortName).toBe('undefined')
})

test('Search for all schools, with limit set to 5, should return Array with 5 items', () => {
  const schools = schoolsInfo()
  const result = getSchools(schools, 5)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(5)
})
