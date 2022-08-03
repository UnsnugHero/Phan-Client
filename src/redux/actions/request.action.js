import axios from '../../util/axiosAdapter';

import {
  DELETE_REQUEST_COMMENT,
  EDIT_REQUEST_COMMENT,
  EDIT_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS,
  LIKE_REQUEST,
  POST_REQUEST_COMMENT,
  REQUEST_ERROR,
  UNLIKE_REQUEST,
} from './types';

export const getRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/requests/${requestId}`);
    dispatch({
      type: GET_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error loading request');
  }
};

export const markRequestComplete = (editRequestPayload, requestId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/requests/${requestId}`, {
      ...editRequestPayload,
      completed: true,
      edited: true,
    });
    dispatch({
      type: EDIT_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error editing request');
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
    handleError(dispatch, error, 'Error posting comment');
  }
};

export const editRequestComment = (editRequestCommentPayload, requestId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/requests/comment/${requestId}/${commentId}`, editRequestCommentPayload);
    dispatch({
      type: EDIT_REQUEST_COMMENT,
      payload: data.updatedRequest,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error updating comment');
  }
};

export const deleteRequestComment = (requestId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/requests/comment/${requestId}/${commentId}`);
    window.alert(data.message);

    dispatch({
      type: DELETE_REQUEST_COMMENT,
      payload: data.updatedRequest,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error deleting request comment');
  }
};

export const likeRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/requests/like/${requestId}`);
    debugger;
    dispatch({
      type: LIKE_REQUEST,
      payload: data.request,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error liking request');
  }
};

export const unlikeRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/requests/unlike/${requestId}`);

    dispatch({
      type: UNLIKE_REQUEST,
      payload: data.request,
    });
  } catch (error) {
    handleError(dispatch, error, 'Error unliking request');
  }
};

const handleError = (dispatch, error, defaultErrorMsg) => {
  const errorMessage = error.response?.data?.message || defaultErrorMsg;
  window.alert(errorMessage);

  dispatch({
    type: REQUEST_ERROR,
  });
};
