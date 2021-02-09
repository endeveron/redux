import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHANGE_THEME } from "./types"

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default: return state
  }
}

const themeReducer = (state = { value: 'light' }, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: state.value === 'light' ? 'dark' : 'light'
      }
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})