import axios from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error) => {
  const phanError = error.response.data;

  toast.error(phanError.message, {
    theme: 'colored',
  });

  if (phanError.validationErrors) {
    phanError.validationErrors.errors.forEach((validationErr) => {
      toast.error(`${validationErr.param}: ${validationErr.msg}`, {
        theme: 'colored',
      });
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
