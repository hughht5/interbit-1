// © 2018 BTL GROUP LTD -  This package is licensed under the MIT license https://opensource.org/licenses/MIT
const Immutable = require('seamless-immutable')

const initialState = Immutable.from({
  chainMetadata: { name: `Template application - public chain` }
})

const actionCreators = {}

const reducer = (state = initialState, action) =>
  // const nextState = interbit-core-buffer.covenant.reducer(state, action)
  state

module.exports = {
  initialState,
  actionCreators,
  reducer
}
