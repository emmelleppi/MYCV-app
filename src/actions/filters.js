// SET_NAME_FILTER
export function setNameFilter(name = '') {
  return {
    type: 'SET_NAME_FILTER',
    name
  }
}

// SET_SURNAME_FILTER
export function setSurnameFilter(surname = '') {
  return {
    type: 'SET_SURNAME_FILTER',
    surname
  }
}

// SORT_BY_NAME
export function sortByName() {
  return {
    type: 'SORT_BY_NAME'
  }
}

// SORT_BY_SURNAME
export function sortBySurname() {
  return {
    type: 'SORT_BY_SURNAME'
  }
}

// SORT_BY_BIRTHDATE
export function sortByBirthDate() {
  return {
    type: 'SORT_BY_BIRTHDATE'
  }
}

// SET_START_BIRTHDATE
export function setStartBirthDate(startBirthDate) {
  return {
    type: 'SET_START_BIRTHDATE',
    startBirthDate
  }
}

// SET_END_BIRTHDATE
export function setEndBirthDate(endBirthDate) {
  return {
    type: 'SET_END_BIRTHDATE',
    endBirthDate
  }
}
