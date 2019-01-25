import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_ERROR,
  fetchDog,
  adoptDog
} from '../actions/index'

const initialState = {
  data: null,
  error: null,
  loading: false
}

export function dogReducer(state = initialState, action) {
  if (action.type === FETCH_DOG_REQUEST) {
    // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dogData,
      loading: false,
      error: null
    })
  } else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  if (action.type === ADOPT_DOG_REQUEST) {
    // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADOPT_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}
