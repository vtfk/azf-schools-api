module.exports = schools => (Array.isArray(schools) && schools.length > 0) || (typeof schools === 'object' && typeof schools.shortName === 'string') ? 200 : 404
