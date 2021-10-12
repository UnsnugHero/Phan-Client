import axios from 'axios';

import { GET_REQUEST_SUCCESS, POST_REQUEST_COMMENT, REQUEST_ERROR } from './types';

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

export const postRequestComment = (postRequestCommentPayload, requestId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/requests/comment/${requestId}`, postRequestCommentPayload);
    dispatch({
      type: POST_REQUEST_COMMENT,
      payload: data.updatedRequest,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error posting request';
    window.alert(errorMessage);

    dispatch({
      type: REQUEST_ERROR,
    });
  }
};
