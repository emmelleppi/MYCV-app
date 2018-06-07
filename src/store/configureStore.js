import { createStore, combineReducers } from 'redux'
import curriculaReducer from '../reducers/curricula'
import filtersReducer from '../reducers/filters'

export default function configureStore() {
  const store = createStore(combineReducers({
    curricula: curriculaReducer,
    filters: filtersReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}
