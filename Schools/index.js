const schoolsInfo = require('vtfk-schools-info')
const getSchools = require('../lib/get-schools')
const getStatusCode = require('../lib/get-status-code')

module.exports = async (context, req) => {
  const schools = getSchools(schoolsInfo(req.body || undefined), req.body && req.body.limit)
  return {
    status: getStatusCode(schools),
    body: schools
  }
}
