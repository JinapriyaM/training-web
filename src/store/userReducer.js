const initialState = {
    user: "",
    names: ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan"]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'RANDOM_NAME':
            return {
                ...state,
                user: state.names[action.val]
            }
        default:
            return state;
    }
}

export default reducer;