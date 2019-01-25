import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR,
  fetchCat,
  adoptCat
} from '../actions/index'

const initialState = {
  data: null,
  error: null,
  loading: false
}

export function catReducer(state = initialState, action) {
  if (action.type === FETCH_CAT_REQUEST) {
    // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.catData,
      loading: false,
      error: null
    })
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  if (action.type === ADOPT_CAT_REQUEST) {
    // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read`
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}
