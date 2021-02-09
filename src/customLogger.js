const customLogger = state => next => action => {
  const newState = next(action)
  const s = state.getState()
  console.log('counter', s.counter, '| theme', s.theme, '| action', action)
  return newState
}

export default customLogger