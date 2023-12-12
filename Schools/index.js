const schoolsInfo = require('vtfk-schools-info')
const { create: roadRunner } = require('@vtfk/e18')
const getSchools = require('../lib/get-schools')
const getStatusCode = require('../lib/get-status-code')

module.exports = async (context, req) => {
  const schools = getSchools(schoolsInfo(req.body || undefined), req.body && req.body.limit)
  const status = getStatusCode(schools)
  const data = status === 200 ? schools : undefined
  const error = status !== 200 ? schools : undefined
  if (process.env.E18_ENABLED) {
    await roadRunner(req, { status: status === 200 ? 'completed' : 'failed', data, error }, context)
  }
  return {
    status,
    body: schools
  }
}
