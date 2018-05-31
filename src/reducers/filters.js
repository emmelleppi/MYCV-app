import moment from 'moment';

const filtersReducerDefaultState = {
    name: '', 
    surname: '', 
    sortBy: 'name', 
    startBirthDate: '', 
    endBirthDate: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            }
        break;

        case 'SET_SURNAME_FILTER':
            return {
                ...state,
                surname: action.surname
            }
        break;

        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            }
        break;

        case 'SORT_BY_SURNAME':
            return {
                ...state,
                sortBy: 'surname'
            }
        break;

        case 'SORT_BY_BIRTHDATE':
            return {
                ...state,
                sortBy: 'birthDate'
            }
        break;
        
        case 'SET_START_BIRTHDATE':
            return {
                ...state,
                startBirthDate: action.startBirthDate
            }
        break;

        case 'SET_END_BIRTHDATE':
            return {
                ...state,
                endBirthDate: action.endBirthDate
            }
        break;
    
        default:
        return state;
    }
};
