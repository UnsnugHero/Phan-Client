import axios from 'axios';

import storageService from '../../services/storage.service';
import { setAxiosHeaderAuthToken } from '../../util/helpers';

export const loadUser = () => async (dispatch) => {
  if (storageService.getItem('authToken')) {
    setAxiosHeaderAuthToken(storageService.getItem('authToken'));
  }

  try {
    const response = (await axios.post('/api/user')).data;

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
