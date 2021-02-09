import {
  DECREMENT,
  INCREMENT,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS
} from "./types";

// COUNTER

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const asyncIncrement = () => dispatch => {
  dispatch(disableButtons())
  // async operation via thunk
  setTimeout(() => {
    dispatch(increment())
    dispatch(enableButtons())
  }, 2000)
}

// THEME

export const changeTheme = () => ({ type: CHANGE_THEME })
export const enableButtons = () => ({ type: ENABLE_BUTTONS })
export const disableButtons = () => ({ type: DISABLE_BUTTONS })