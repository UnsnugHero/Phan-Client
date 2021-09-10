import storageService from '../../services/storage.service';
import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, LOGOUT, USER_LOADED } from '../actions/types';

const initialState = {
  authToken: storageService.getItem('authToken'),
  isAuthenticated: false,
  userRole: 'user',
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      storageService.storeItem('authToken', payload.authToken);
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('authToken');
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        userRole: payload.role,
      };
    default:
      return state;
  }
};
