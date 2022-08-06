import axios from '../../util/axiosAdapter';
import { GET_POLL_ERROR, GET_POLL_SUCCESS } from './types';

export const getPoll = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/poll');

    dispatch({
      type: GET_POLL_SUCCESS,
      payload: data.poll,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error loading poll';
    window.alert(errorMessage);

    dispatch({
      type: GET_POLL_ERROR,
    });
  }
};

export const votePoll = (vote, pollId) => async (dispatch) => {
  try {
    await axios.put(`/api/poll/vote/${vote}/${pollId}`);
    const { data } = await axios.get('/api/poll');

    dispatch({
      type: GET_POLL_SUCCESS,
      payload: data.poll,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error voting for poll';
    window.alert(errorMessage);
  }
};
