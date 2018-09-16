import {
    GET_ALL_CARDS
} from "../actions/types"
const initialState = "";

const colorReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_CARDS:
            state += action.colors;
            return state;
        default:
            return state
    }
}


export default colorReducer