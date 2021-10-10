import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { isEmpty, isNil, omitBy } from 'lodash';

import { GeneralXLHeader } from '../styles/App.style';
import {
  CancelButton,
  MakeRequestButtons,
  MakeRequestContainer,
  MakeRequestForm,
  MakeRequestInput,
  MakeRequestTextArea,
} from '../styles/Request.style';
import { makeRequest } from '../../services/request.service';
import Button from '../general/Button';
import Loader from '../general/Loader';

const MakeRequest = () => {
  const history = useHistory();

  const [makeRequestState, setForm] = useState({
    subject: '',
    description: '',
    location: '',
    errors: { subject: null, location: null },
  });

  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (formFieldKey) => (event) => {
    setForm({
      ...makeRequestState,
      [formFieldKey]: event.target.value,
    });
  };

  const getFormErrors = () => {
    const errors = { subject: null, location: null };

    if (makeRequestState.subject === '') {
      errors['subject'] = 'Field is required';
    }

    if (makeRequestState.location === '') {
      errors['location'] = 'Field is required';
    }

    return omitBy(errors, isNil);
  };

  const handleCancel = () => {
    history.push('/requests');
  };

  const handleSubmitRequest = async (event) => {
    event.preventDefault();

    const errors = getFormErrors();
    setForm({ ...makeRequestState, errors });

    if (isEmpty(errors)) {
      setLoading(true);
      const { subject, location, description } = makeRequestState;
      const makeRequestPayload = { subject, location, description };
      const success = await makeRequest(makeRequestPayload, history);

      if (!success) {
        setLoading(false);
      }
    }
  };

  const requestForm = (
    <MakeRequestForm>
      <MakeRequestInput
        maxLength={30}
        placeholder='Subject'
        type='text'
        name='subject'
        onInputChange={handleInputChange('subject')}
        error={makeRequestState.errors.subject}
      />
      <MakeRequestTextArea
        onTextAreaChange={handleInputChange('description')}
        placeholder='Description'
        rows={14}
        maxLength={250}
      />
      <MakeRequestInput
        maxLength={30}
        placeholder='Location'
        type='text'
        name='location'
        onInputChange={handleInputChange('location')}
        error={makeRequestState.errors.location}
      />
      <MakeRequestButtons>
        <CancelButton text='Cancel' onButtonClick={handleCancel} />
        <Button text='Submit' onButtonClick={handleSubmitRequest} />
      </MakeRequestButtons>
    </MakeRequestForm>
  );

  return (
    <MakeRequestContainer>
      <GeneralXLHeader>Make Request</GeneralXLHeader>
      {isLoading ? <Loader /> : requestForm}
    </MakeRequestContainer>
  );
};

export default MakeRequest;
