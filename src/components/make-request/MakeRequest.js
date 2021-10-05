import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { GeneralXLHeader } from '../styles/App.style';
import {
  CancelButton,
  MakeRequestButtons,
  MakeRequestContainer,
  MakeRequestForm,
  MakeRequestInput,
  MakeRequestTextArea,
} from '../styles/Request.style';
import Button from '../general/Button';
import { isEmpty, isNil, omitBy } from 'lodash';

const MakeRequest = () => {
  const history = useHistory();

  const [makeRequestState, setForm] = useState({
    subject: '',
    description: '',
    location: '',
    errors: { subject: null, location: null },
  });

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

  const handleSubmitRequest = (event) => {
    event.preventDefault();

    const errors = getFormErrors();
    setForm({ ...makeRequestState, errors });

    if (isEmpty(errors)) {
      // form payload and make api call to create request
      // then route to its detail page
      console.log(makeRequestState);
    }
  };

  return (
    <MakeRequestContainer>
      <GeneralXLHeader>Make Request</GeneralXLHeader>
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
    </MakeRequestContainer>
  );
};

export default MakeRequest;
