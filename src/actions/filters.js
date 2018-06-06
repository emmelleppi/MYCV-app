// SET_NAME_FILTER
export const setNameFilter = (name = '') => ({
  type: 'SET_NAME_FILTER',
  name
})

// SET_SURNAME_FILTER
export const setSurnameFilter = (surname = '') => ({
  type: 'SET_SURNAME_FILTER',
  surname
})

// SORT_BY_NAME
export const sortByName = () => ({type: 'SORT_BY_NAME'})

// SORT_BY_SURNAME
export const sortBySurname = () => ({type: 'SORT_BY_SURNAME'})

// SORT_BY_BIRTHDATE
export const sortByBirthDate = () => ({type: 'SORT_BY_BIRTHDATE'})

// SET_START_BIRTHDATE
export const setStartBirthDate = (startBirthDate) => ({
  type: 'SET_START_BIRTHDATE',
  startBirthDate
})

// SET_END_BIRTHDATE
export const setEndBirthDate = (endBirthDate) => ({
  type: 'SET_END_BIRTHDATE',
  endBirthDate
})
