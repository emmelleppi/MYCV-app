import {createStore, combineReducers} from 'redux'
import curriculaReducer from '../reducers/curricula'
import filtersReducer from '../reducers/filters'

// Creazione dello store per Redux combinando i riduttori dei curricula e dei filtri
// Configurazione per compatibilità con il Redux Devtools
export default () => {
  const store = createStore(combineReducers({
    curricula: curriculaReducer,
    filters: filtersReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}
