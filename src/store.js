import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { catReducer } from './reducers/cat'
import { dogReducer } from './reducers/dog'

const store = createStore(
  combineReducers({
    dog: dogReducer,
    cat: catReducer
  }),
  applyMiddleware(thunk)
)

store.getState()

export default store
