import { API_BASE_URL } from '../config'

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = dogData => ({
  type: FETCH_DOG_SUCCESS,
  dogData
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
})

// async action: dispatches async request, handles success or err actions
export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest())
  return fetch(`${API_BASE_URL}/api/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(routes => dispatch(fetchDogSuccess(routes)))
    .catch(err => dispatch(fetchDogError(err)))
}

// DELETE actions
export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST'
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
})

// export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
// export const adoptDogSuccess = () => ({
//   type: ADOPT_DOG_SUCCESS,

// });

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const adoptDogError = error => ({
  type: ADOPT_DOG_ERROR,
  error
})

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest())
  return fetch(`${API_BASE_URL}/api/dog`, {
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
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(adoptDogError(err)))
}
