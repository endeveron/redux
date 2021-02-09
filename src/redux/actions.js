import { DECREMENT, INCREMENT, CHANGE_THEME } from "./types";

// COUNTER

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const asyncIncrement = () => dispatch => {
  // async operation via thunk
  setTimeout(() => {
    dispatch(increment())
  }, 2000)
}


// THEME

export const changeTheme = () => ({ type: CHANGE_THEME })