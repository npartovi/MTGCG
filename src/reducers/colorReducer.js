import { GET_ALL_CARDS } from '../actions/mtgFilter/types';
const initialState = '';

const colorReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case GET_ALL_CARDS:
      newState = action.colors;
      return newState;
    default:
      return state;
  }
};

export default colorReducer;
