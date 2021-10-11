import {
  ADD_REQUEST_COMMENT,
  DELETE_REQUEST_COMMENT,
  EDIT_REQUEST_COMMENT,
  GET_REQUEST_SUCCESS,
  REQUEST_ERROR,
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
      return {
        ...state,
        loading: false,
        request: payload,
      };
    case ADD_REQUEST_COMMENT:
    case DELETE_REQUEST_COMMENT:
    case EDIT_REQUEST_COMMENT:
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        request: null,
        error: true,
      };
    default:
      return state;
  }
};
