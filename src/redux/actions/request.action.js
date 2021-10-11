import axios from 'axios';
import { GET_REQUEST_SUCCESS, REQUEST_ERROR } from './types';

export const getRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/requests/${requestId}`);
    dispatch({
      type: GET_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error loading request';
    window.alert(errorMessage);

    dispatch({
      type: REQUEST_ERROR,
    });
  }
};
