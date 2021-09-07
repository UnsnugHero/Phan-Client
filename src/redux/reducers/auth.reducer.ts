import { AuthAction, AuthState } from '../../models/reducers.model';
import storageService from '../../services/storage.service';

const initialState: AuthState = {
  authToken: storageService.getItem('authToken'),
  isAuthenticated: false,
  userRole: 'user',
};

export const authReducer = (state = initialState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_SUCCESS':
      storageService.storeItem('authToken', payload.authToken);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        userRole: payload.role,
      };
    default:
      return state;
  }
};
