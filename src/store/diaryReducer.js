import * as actionTypes from './actions/action'

const initialState = {
    cardsDet : [{ title: "aaccaaaa", user: "bfffff", description: "fjlajffjjfjsdjfjsljfd" }],
    textTitle: "",
    textDescription: ""

};


const diaryReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_CARD:
            const updatedCardsDet = state.cardsDet.concat(action.val);
            return {
                ...state,
                cardsDet: updatedCardsDet,
                textTitle: "",
                textDescription: ""
            }
        case actionTypes.SET_VALUES:
            return {
                ...state,
                textTitle: action.val.textTitle,
                textDescription: action.val.textDescription
            }
        case actionTypes.FETCH_CARDS:
            return {
                ...state, 
                cardsDet: action.val
            }
        default:
            return state
    }
}

export default diaryReducer;