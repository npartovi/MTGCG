import {
    GET_ALL_CARDS,
    GET_CARD
} from "../actions/types"
const initialState = {
    cards: []
};

const cardReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_CARDS:
            return {...state, cards: action.payload};
        case GET_CARD:
            return {...state, cards: state.cards[action.payload.idx] = action.payload.card}
        default:
            return state;
    }
}


export default cardReducer