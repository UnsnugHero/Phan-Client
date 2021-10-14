import axios from 'axios';

export const makeRequest = async (makeRequestPayload, history) => {
  try {
    const { data } = await axios.post('/api/requests/create', makeRequestPayload);
    history.push(`/requests/${data._id}`);
    return true;
  } catch (error) {
    handleError('Make request failed');
    return false;
  }
};

export const deleteRequest = async (requestId) => {
  try {
    const { data } = await axios.delete(`/api/requests/${requestId}`);
    window.alert(data.message);
    return true;
  } catch (error) {
    handleError(error, 'Delete request failed');
    return false;
  }
};

const handleError = (error, defaultErrorMsg) => {
  const errorMessage = error.response?.data?.message || defaultErrorMsg;
  window.alert(errorMessage);
};
