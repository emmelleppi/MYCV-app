const filtersReducerDefaultState = {
  name: '',
  surname: '',
  sortBy: 'name',
  startBirthDate: '',
  endBirthDate: ''
}

export default function filtersReducer(state = filtersReducerDefaultState, action) {
  switch (action.type) {
    case 'SET_NAME_FILTER':
      return {
        ...state,
        name: action.name
      }

    case 'SET_SURNAME_FILTER':
      return {
        ...state,
        surname: action.surname
      }

    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      }

    case 'SORT_BY_SURNAME':
      return {
        ...state,
        sortBy: 'surname'
      }

    case 'SORT_BY_BIRTHDATE':
      return {
        ...state,
        sortBy: 'birthDate'
      }

    case 'SET_START_BIRTHDATE':
      return {
        ...state,
        startBirthDate: action.startBirthDate
      }

    case 'SET_END_BIRTHDATE':
      return {
        ...state,
        endBirthDate: action.endBirthDate
      }

    default:
      return state
  }
}
