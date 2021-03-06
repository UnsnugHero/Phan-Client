import {
  POST_REQUEST_COMMENT,
  DELETE_REQUEST_COMMENT,
  EDIT_REQUEST_COMMENT,
  GET_REQUEST_SUCCESS,
  REQUEST_ERROR,
  EDIT_REQUEST_SUCCESS,
  LIKE_REQUEST,
  UNLIKE_REQUEST,
} from '../actions/types';

const initialState = {
  loading: true,
  request: null,
  error: false,
};

export const requestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REQUEST_SUCCESS:
    case EDIT_REQUEST_SUCCESS:
    case LIKE_REQUEST:
    case UNLIKE_REQUEST:
    case POST_REQUEST_COMMENT:
    case DELETE_REQUEST_COMMENT:
    case EDIT_REQUEST_COMMENT:
      return {
        ...state,
        loading: false,
        request: payload,
        error: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
