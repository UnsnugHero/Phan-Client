import React from 'react';
import { useHistory } from 'react-router';
import Button from '../general/Button';
import TextInput from '../general/TextInput';
import { GeneralXLHeader } from '../styles/App.style';
import { MakeRequestContainer } from '../styles/Request.style';

const MakeRequest = () => {
  const history = useHistory();

  const handleCancelButtonClick = () => {
    history.push('/requests');
  };

  const handleSubmitButtonClick = () => {
    // api call
  };

  return (
    <MakeRequestContainer>
      <GeneralXLHeader>Make Request</GeneralXLHeader>
      <TextInput text='Subject' />
      {/* text area */}
      <TextInput text='Location' />
      <Button text='Cancel' onButtonClick={handleCancelButtonClick} />
      <Button text='Submit' onButtonClick={handleSubmitButtonClick} />
    </MakeRequestContainer>
  );
};

export default MakeRequest;
