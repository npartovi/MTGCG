import {
  START_LOADING,
  LOADING_SUCCESS
} from '../actions/loading/types'

const initialState = {
  global: false
}

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState
  switch (action.type) {
    case START_LOADING:
      return { ...newState, global: true }
    case LOADING_SUCCESS:
      return { ...newState, global: false }
    default:
      return state
  }
}

export default colorReducer
