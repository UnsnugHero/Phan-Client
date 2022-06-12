import axios from './axiosAdapter';

export const handleError = (error) => {
  const phanError = error.response.data;

  window.alert(phanError.message);

  if (phanError.validationErrors) {
    phanError.validationErrors.errors.forEach((validationErr) => {
      window.alert(`${validationErr.param}: ${validationErr.msg}`);
    });
  }
};

export const setAxiosHeaderAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
