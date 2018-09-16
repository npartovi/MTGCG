import {combineReducers} from 'redux'
import cardReducer from './cardReducer'
import colorReducer from "./colorReducer";


export default combineReducers({
    cards: cardReducer,
    colors: colorReducer
})