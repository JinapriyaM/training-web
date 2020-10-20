const initialState = {
    cardsDet : [{ title: "aaccaaaa", user: "bfffff", description: "fjlajffjjfjsdjfjsljfd" }],
    textTitle: "",
    textDescription: ""

};


const diaryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CARD':
            const updatedCardsDet = state.cardsDet.concat(action.val);
            return {
                ...state,
                cardsDet: updatedCardsDet,
                textTitle: "",
                textDescription: ""
            }
        case 'SET_VALUES':
            return {
                ...state,
                textTitle: action.val.textTitle,
                textDescription: action.val.textDescription
            }
        default:
            return state
    }
}

export default diaryReducer;