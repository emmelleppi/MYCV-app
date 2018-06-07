const curriculaReducerDefaultState = []

export default function curriculaReducer(state = curriculaReducerDefaultState, action) {
  switch (action.type) {
    case 'ADD_CURRICULUM':
      return [...state, action.curriculum]
    case 'REMOVE_CURRICULUM':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_CURRICULUM':
      return state.map((curriculum) => {
        if (curriculum.id === action.id) {
          console.log({ ...curriculum, ...action.update })
          return {
            ...curriculum,
            ...action.update
          }
        } else {
          return curriculum
        }
      })
    default:
      return state
  }
}
