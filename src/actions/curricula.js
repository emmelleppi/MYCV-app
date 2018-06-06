import uuid from 'uuid'
import moment from 'moment'

// ADD_CURRICULUM
export function addCurriculum (
  {
    name = '',
    surname = '',
    birthDate = moment(),
    city = '',
    province = '',
    country = '',
    street = '',
    streetNumber = '',
    cellphoneNumber = '',
    landlinePhone = '',
    firstEmail = '',
    secondEmail = ''
  } = {}) {
  return {
    type: 'ADD_CURRICULUM',
    curriculum: {
      id: uuid(),
      name,
      surname,
      birthDate,
      city,
      province,
      country,
      street,
      streetNumber,
      cellphoneNumber,
      landlinePhone,
      firstEmail,
      secondEmail
    }
  }
}

// REMOVE_CURRICULUM
export function removeCurriculum ({ id } = {}) {
  return {
    type: 'REMOVE_CURRICULUM',
    id
  }
}

// EDIT_CURRICULUM
export function editCurriculum (id, update) {
  return {
    type: 'EDIT_CURRICULUM',
    id,
    update
  }
}
