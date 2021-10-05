import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { GeneralXLHeader } from '../styles/App.style';
import {
  CancelButton,
  MakeRequestButtons,
  MakeRequestContainer,
  MakeRequestForm,
  MakeRequestInput,
} from '../styles/Request.style';
import Button from '../general/Button';

const MakeRequest = () => {
  const history = useHistory();

  const [makeRequestState, setForm] = useState({
    subject: '',
    description: '',
    location: '',
  });

  const handleInputChange = (formFieldKey) => (event) => {};

  const handleCancelButtonClick = () => {
    history.push('/requests');
  };

  const handleSubmitButtonClick = () => {
    // api call
  };

  return (
    <MakeRequestContainer>
      <GeneralXLHeader>Make Request</GeneralXLHeader>
      <MakeRequestForm>
        <MakeRequestInput
          maxLength={30}
          placeholder='Subject'
          type='text'
          onInputChange={handleInputChange('subject')}
        />
        {/* text area */}
        <MakeRequestInput
          maxLength={30}
          placeholder='Location'
          type='text'
          onInputChange={handleInputChange('location')}
        />
        <MakeRequestButtons>
          <CancelButton text='Cancel' onButtonClick={handleCancelButtonClick} />
          <Button text='Submit' onButtonClick={handleSubmitButtonClick} />
        </MakeRequestButtons>
      </MakeRequestForm>
    </MakeRequestContainer>
  );
};

export default MakeRequest;
