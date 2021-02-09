import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types"

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default: return state
  }
}

const initialState = {
  value: 'light',
  buttonsDisabled: false
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: state.value === 'light' ? 'dark' : 'light'
      }
    case DISABLE_BUTTONS:
      return {
        ...state,
        buttonsDisabled: true
      }
    case ENABLE_BUTTONS:
      return {
        ...state,
        buttonsDisabled: false
      }
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})