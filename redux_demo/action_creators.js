import { INCREASE_COUNT } from './types'

export const increaseCount = (para) => {

  // type 参数是必须有的,  其他的可以自行填写。这里就是一个 填参数的过程。
  return {
    type: INCREASE_COUNT
    // isClickable: true,
    // payload: para   //  貌似这个没用。
  }
}
