import { UserRole } from './user.model';

// Auth

export type AuthActionType =
  | 'LOGIN_SUCCESS'
  | 'LOGIN_FAIL'
  | 'LOGOUT'
  | 'AUTH_ERROR'
  | 'SIGNUP_SUCCESS'
  | 'SIGNUP_FAIL'
  | 'USER_LOADED';

export interface AuthState {
  authToken: string | null;
  isAuthenticated: boolean;
  userRole: UserRole;
}

export interface AuthAction {
  type: AuthActionType;
  payload?: any;
}
