import { applyMiddleware, createStore } from 'redux'
import { decrement, increment, asyncIncrement, changeTheme } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import customLogger from './customLogger'

import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, customLogger)  // enhancers
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value
})

store.dispatch({ type: 'INIT_APP' })

themeBtn.addEventListener('click', () => {
  store.dispatch(changeTheme())
})

