import { ADD_COUNTER } from '../actions/types'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNTER: return state + 1
    default: return state
  }
}

export default counterReducer
