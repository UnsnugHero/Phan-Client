import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest } from '../../services/request.service';
import Loader from '../general/Loader';

import MakeRequest from '../make-request/MakeRequest';
import { MakeRequestContainer } from '../styles/Request.style';

const EditRequest = () => {
  const { requestId } = useParams();

  const [requestState, setRequest] = useState({
    subject: '',
    description: '',
    location: '',
  });
  const [isLoading, setLoading] = useState(true);
  const [getError, setGetError] = useState(false);

  useEffect(() => {
    const getRequestForEdit = async () => {
      const request = await getRequest(requestId);

      if (!request) {
        setGetError(true);
        setLoading(false);
        return;
      }

      const { subject, description, location } = request;
      setRequest({ subject, description, location });
      setLoading(false);
    };

    getRequestForEdit();
  }, [requestId]);

  return isLoading ? (
    <MakeRequestContainer>
      <Loader />
    </MakeRequestContainer>
  ) : (
    <MakeRequest isEdit={true} getRequestError={getError} {...requestState}></MakeRequest>
  );
};

export default EditRequest;
