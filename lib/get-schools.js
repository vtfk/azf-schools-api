module.exports = (schools, limit) => {
  if (limit && limit === 1) {
    if (schools.length > 0) return schools[0]
    return {}
  } else if (limit && limit > 1 && schools.length > 0) return schools.slice(0, limit)
  return schools
}
