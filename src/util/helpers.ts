import { toast } from 'react-toastify';

import { PhanError } from '../models/general.model';

export const handleError = (error: any) => {
  const phanError: PhanError = error.response.data;

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
