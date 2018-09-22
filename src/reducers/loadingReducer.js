import {
  START_FETCHING,
  FETCH_SUCCESS
} from '../actions/loading/types'

const initialState = {
  global: false
}

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState
  switch (action.type) {
    case START_FETCHING:
      return { ...newState, global: true }
    case FETCH_SUCCESS:
      return { ...newState, global: false }
    default:
      return state
  }
}

export default loadingReducer
