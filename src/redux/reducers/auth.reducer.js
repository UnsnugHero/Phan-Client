import storageService from '../../services/storage.service';
import { AUTH_TOKEN_STORAGE_KEY } from '../../util/constants';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADED,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      storageService.storeItem(AUTH_TOKEN_STORAGE_KEY, payload.authToken);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        loading: false,
      };
    default:
      return state;
  }
};
