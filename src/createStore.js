export const createStore = (rootReducer) => {

  let state = rootReducer(initialState, { type: '' })
  const subscribers = []

  return {

    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },

    subscribe(callback) {
      subscribers.push(callback)
    },

    getState() {
      return state
    }
  }
}