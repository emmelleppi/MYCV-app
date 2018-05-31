// Stato iniziale dei curricula vuoto
const curriculaReducerDefaultState = [];

export default (state = curriculaReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CURRICULUM':
            return [...state,action.curriculum];
        break;
        case 'REMOVE_CURRICULUM':
            return state.filter(({ id }) => id !== action.id);
        break;
        case 'EDIT_CURRICULUM':
            return state.map((curriculum)=>{
                if (curriculum.id === action.id) {
                     console.log({...curriculum,...action.update});
                    return {
                        ...curriculum,
                        ...action.update
                    }
                } else {
                    return curriculum;
                }
            });
        break;
        default:
        return state;
    }
};