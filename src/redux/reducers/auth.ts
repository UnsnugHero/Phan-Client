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
    default:
      return state;
  }
};
