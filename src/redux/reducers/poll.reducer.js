import { VOTE_SUCCESS, GET_POLL_SUCCESS, GET_POLL_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  poll: null,
  error: false,
};

export const pollReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VOTE_SUCCESS:
    case GET_POLL_SUCCESS:
      return {
        ...state,
        loading: false,
        poll: payload,
        error: false,
      };
    case GET_POLL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
