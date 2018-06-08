import moment from 'moment'

const DAY = 'day'

function isSameDateOrAfter(dateToCheck, referenceDate) {
  const dateToCheckMoment = moment(dateToCheck)
  const referenceDateMoment = moment(referenceDate)
  return dateToCheckMoment.isSameOrAfter(referenceDateMoment, DAY)
}

function isSameDateOrBefore(dateToCheck, referenceDate) {
  const dateToCheckMoment = moment(dateToCheck)
  const referenceDateMoment = moment(referenceDate)
  return dateToCheckMoment.isSameOrBefore(referenceDateMoment, DAY)
}

function isIncludedCaseInsensitive(strToSearch, strThatIncludes) {
  return strThatIncludes.toLowerCase().includes(strToSearch.toLowerCase())
}

function isCurriculumValid(curriculum, { name, surname, sortBy, startBirthDate, endBirthDate }) {
  let predicate = true
  predicate &= (endBirthDate && curriculum.birthDate) ? isSameDateOrAfter(endBirthDate, curriculum.birthDate) : true
  predicate &= (startBirthDate && curriculum.birthDate) ? isSameDateOrBefore(startBirthDate, curriculum.birthDate) : true
  predicate &= isIncludedCaseInsensitive(name, curriculum.name)
  predicate &= isIncludedCaseInsensitive(surname, curriculum.surname)
  return predicate
}

export default function selectCurricula(curricula, filters) {
  const sortBy = require('lodash/sortby')
  const filteredCurricula = curricula.filter((curriculum) => {
    return isCurriculumValid(curriculum, filters)
  })
  const sortedCurricula = sortBy(filteredCurricula, filters.sortBy)
  return sortedCurricula
}
