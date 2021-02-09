const customLogger = state => next => action => {
  const newState = next(action)
  console.log('state', state.getState(), '| action', action)
  return newState
}

export default customLogger