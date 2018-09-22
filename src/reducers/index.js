import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import colorReducer from './colorReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  cards: cardReducer,
  colors: colorReducer,
  loading: loadingReducer
});
