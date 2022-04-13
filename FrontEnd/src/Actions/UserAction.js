import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATEPASSWORD_FAIL,
  USER_UPDATEPASSWORD_REQUEST,
  USER_UPDATEPASSWORD_SUCCESS,

} from '../Constants/userConstants'
import axios from 'axios'

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/NormalHome'
  }
}

export const signup = (firstName, lastName, mobile, email, password, age) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      firstName,
      lastName,
      mobile,
      email,
      password,
      age,
    }
    const url = 'http://localhost:9090/onlineShopping/user/add'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}



export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = 'http://localhost:9090/onlineShopping/user/login'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const updateProfile = (firstName, lastname, mobile, email, userName, userId) => {
  return (dispatch) => {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      firstName,
      lastname,
      mobile,
      email,
      userName,
    }
    const url = 'http://localhost:9090/onlineShopping/user/update/' + userId
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const updatePassword = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_UPDATEPASSWORD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = 'http://localhost:9090/onlineShopping/user/changePassword'
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_UPDATEPASSWORD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_UPDATEPASSWORD_FAIL,
          payload: error,
        })
      })
  }
}
