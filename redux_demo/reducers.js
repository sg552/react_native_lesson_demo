import { INCREASE_COUNT} from './types'

const initialState = {
  count: 0
  // isClickable: true
}

const countReducer = (state = initialState, action ) => {
  switch(action.type) {
    case INCREASE_COUNT:
      console.info("== count: ", state.count)
      return {
        // ...state,
        count: state.count + 1  // 我们只关心这一个就好了。
      }
    default:
      return state
  }
}

export default countReducer
