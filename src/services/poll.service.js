import axios from 'axios';

export const getPoll = async () => {
  try {
    const { data } = await axios.get('/api/poll');
    return data;
  } catch (error) {
    handleError(error, 'Error Loading Poll');
  }
};

export const votePoll = async (pollId, vote) => {
  try {
    const { data } = await axios.put(`/api/poll/vote/${vote}/${pollId}`);
    return data;
  } catch (error) {
    handleError(error, 'Error Voting for Poll');
  }
};

const handleError = (error, defaultErrorMsg) => {
  const errorMessage = error.response?.data?.message || defaultErrorMsg;
  window.alert(errorMessage);
};
