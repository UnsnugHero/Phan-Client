import axios from 'axios';

export const makeRequest = async (makeRequestPayload, history, setLoadingFn) => {
  try {
    const { data } = await axios.post('/api/requests/create', makeRequestPayload);
    history.push(`/requests/${data._id}`);
    return true;
  } catch (error) {
    window.alert('Make request failed. Try again');
    return false;
  }
};
