import axios from '../util/axiosAdapter';

export const getRequest = async (requestId) => {
  try {
    const url = `/api/requests/${requestId}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    handleError(error, 'Error loading request');
  }
};

export const searchRequests = async (searchRequestPayload) => {
  try {
    const { data } = await axios.post('/api/requests/search', searchRequestPayload);
    return data.results;
  } catch (error) {
    handleError(error, 'Search failed');
    return [];
  }
};

export const makeRequest = async (makeRequestPayload, history) => {
  try {
    const { data } = await axios.post('/api/requests/create', makeRequestPayload);
    history.push(`/requests/${data._id}`);
    return true;
  } catch (error) {
    handleError(error, 'Make request failed');
    return false;
  }
};

export const editRequest = async (editRequestPayload, requestId, history) => {
  try {
    await axios.put(`/api/requests/${requestId}`, editRequestPayload);
    history.push(`/requests/${requestId}`);
    return true;
  } catch (error) {
    handleError(error, 'Edit request failed');
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
