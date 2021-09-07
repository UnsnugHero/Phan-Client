import axios from 'axios';

import storageService from '../../services/storage.service';
import { ThunkAction } from '../../models/actions.model';
import { AuthAction, AuthState } from '../../models/reducers.model';
import { GetUserResponse } from '../../models/user.model';
import { setAxiosHeaderAuthToken } from '../../util/helpers';

export const loadUser = (): ThunkAction<void, AuthState, unknown, AuthAction> => async (dispatch) => {
  if (storageService.getItem('authToken')) {
    setAxiosHeaderAuthToken(storageService.getItem('authToken'));
  }

  try {
    const response: GetUserResponse = (await axios.post('/api/user')).data;

    dispatch({
      type: 'USER_LOADED',
      payload: response.user,
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};
