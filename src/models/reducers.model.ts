import { UserRole } from './user.model';

// Auth

export type AuthActionType = 'LOGIN_SUCCESS' | 'LOGIN_FAIL' | 'LOGOUT';

export interface AuthState {
  authToken: string | null;
  isAuthenticated: boolean;
  userRole: UserRole;
}

export interface AuthAction {
  type: AuthActionType;
  payload: any;
}
