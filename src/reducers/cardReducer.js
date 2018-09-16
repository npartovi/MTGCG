import _ from 'lodash';

import {
    GET_ALL_CARDS,
    GET_CARD
} from "../actions/types";
const initialState = [];

const cardReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case GET_ALL_CARDS:
            newState = action.payload;
            return newState;
        case GET_CARD:
            newState = state.slice();
            newState[action.payload.idx] = action.payload.card;
            return newState;
        default:
            return state;
    }
}


export default cardReducer;