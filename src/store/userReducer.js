import * as actionTypes from './actions/action';

const initialState = {
    user: "",
    names: ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan"]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.RANDOM_NAME:
            return {
                ...state,
                user: state.names[action.val]
            }
        case actionTypes.LOAD_NAMES:
            return {
                ...state,
                names: action.names
            }
        default:
            return state;
    }
}

export default reducer;