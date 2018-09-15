import {
    GET_ALL_CARDS
} from "../actions/types"
const initialState = {
    cards: [],
    card: {}
};

const cardReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_CARDS:
            return {...state, cards: action.payload};
        default:
            return state
    }
}


export default cardReducer