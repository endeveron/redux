import { DECREMENT, INCREMENT } from "./types";

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const asyncIncrement = () => dispatch => {
  // async operation via thunk
  setTimeout(() => {
    dispatch(increment())
  }, 2000)
}