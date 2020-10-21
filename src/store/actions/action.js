export const ADD_CARD = 'ADD_CARD';
export const SET_VALUES = 'SET_VALUES';
export const FETCH_CARDS = 'FETCH_CARDS';

export const RANDOM_NAME = 'RANDOM_NAME';
export const LOAD_NAMES = 'LOAD_NAMES';

export const randomName = (ind) => {
    return {
        type: RANDOM_NAME,
        val: ind
    }
}

export const submitCard = (data) => {
    return {
        type: ADD_CARD,
        val: data
    }
}

export const setValue = (data) => {
    return { 
        type: SET_VALUES, 
        val: data 
    }

}

export const fetchCards = (data) => {
    return {
        type: FETCH_CARDS,
        val: data
    }
}