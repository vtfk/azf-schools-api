const schoolsInfo = require('vtfk-schools-info')
const getSchools = require('../lib/get-schools')
const getStatusCode = require('../lib/get-status-code')

test('Array of 1 school returns 200', () => {
  const school = schoolsInfo({ fullName: 'Bø vidaregåande skule' })
  const statusCode = getStatusCode(school)
  expect(statusCode).toBe(200)
})

test('Array of 2 schools returns 200', () => {
  const schools = schoolsInfo({ officialName: 'Bamble videregående skole' })
  const statusCode = getStatusCode(schools)
  expect(statusCode).toBe(200)
})

test('Array of 0 schools returns 404', () => {
  const schools = schoolsInfo({ officialName: 'Livets harde skole' })
  const statusCode = getStatusCode(schools)
  expect(statusCode).toBe(404)
})

test('When 2 schools found, but is limited to 1, it should return 200', () => {
  const schools = schoolsInfo({ officialName: 'Bamble videregående skole' })
  const school = getSchools(schools, 1)
  const statusCode = getStatusCode(school)
  expect(statusCode).toBe(200)
})

test('When 0 schools found, but is limited to 1, it should return 404', () => {
  const schools = schoolsInfo({ officialName: 'Livets harde skole' })
  const school = getSchools(schools, 1)
  const statusCode = getStatusCode(school)
  expect(statusCode).toBe(404)
})
