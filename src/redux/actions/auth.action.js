import axios from '../../util/axiosAdapter';

import storageService from '../../services/storage.service';
import { setAxiosHeaderAuthToken } from '../../util/helpers';
import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT } from './types';
import { AUTH_TOKEN_STORAGE_KEY } from '../../util/constants';

export const loadUser = () => async (dispatch) => {
  if (storageService.getItem(AUTH_TOKEN_STORAGE_KEY)) {
    setAxiosHeaderAuthToken(storageService.getItem(AUTH_TOKEN_STORAGE_KEY));
  }

  try {
    const response = (await axios.get('/api/user')).data;

    dispatch({
      type: 'USER_LOADED',
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};

export const login = (loginPayload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/login', loginPayload);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    window.alert('Login failed. Try again');

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const signup = (signupPayload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/user/create', signupPayload);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    window.alert('Signup failed. Try again');

    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};
