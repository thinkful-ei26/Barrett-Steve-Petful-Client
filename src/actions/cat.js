import { API_BASE_URL } from '../config'

// Get actions
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = catData => ({
  type: FETCH_CAT_SUCCESS,
  catData
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
})

// async action: dispatches async request, handles success or err actions
export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest())
  return fetch(`${API_BASE_URL}/api/cat`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(routes => dispatch(fetchCatSuccess(routes)))
    .catch(err => dispatch(fetchCatError(err)))
}

// DELETE actions
export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

// export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
// export const adoptCatSuccess = () => ({
//   type: ADOPT_CAT_SUCCESS,
// });

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const adoptCatError = error => ({
  type: ADOPT_CAT_ERROR,
  error
})

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest())
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(adoptCatError(err)))
}
