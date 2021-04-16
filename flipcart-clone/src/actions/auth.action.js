import { authConstants, cartConstants } from './constants'
import axios from '../helpers/axios'

export const login = user => async dispatch => {
  dispatch({ type: authConstants.LOGIN_REQUEST })
  const res = await axios.post(`/signin`, { ...user })

  if (res.status === 200) {
    const { token, user } = res.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    })
  } else {
    if (res.status === 400) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error }
      })
    }
  }
}

export const isUserLoggedIn = () => async dispatch => {
  const token = localStorage.getItem('token')
  if (token) {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    })
  } else {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: 'Failed to login' }
    })
  }
}

export const signout = () => async dispatch => {
  dispatch({ type: authConstants.LOGOUT_REQUEST })
  // localStorage.removeItem('user')
  // localStorage.removeItem('token')
  localStorage.clear()
  dispatch({ type: authConstants.LOGOUT_SUCCESS })
  dispatch({ type: cartConstants.RESET_CART })

  /*
  const res = await axios.post('/admin/signout')
  if (res.status === 200) {

  } else {
    dispatch({
      type: authConstants.LOGOUT_FAILURE,
      payload: { error: res.data.error }
    })
  }
*/
}
