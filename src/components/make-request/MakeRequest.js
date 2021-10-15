import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
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
import { editRequest, makeRequest } from '../../services/request.service';
import Button from '../general/Button';
import Loader from '../general/Loader';

const MakeRequest = ({ isEdit = false, getRequestError = false, subject, description, location }) => {
  const history = useHistory();

  const { requestId } = useParams();

  const [makeRequestState, setForm] = useState({
    subject: isEdit ? subject : '',
    description: isEdit ? description : '',
    location: isEdit ? location : '',
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

      if (isEdit) {
        makeRequestPayload['edited'] = true;
      }

      const success = await (isEdit
        ? editRequest(makeRequestPayload, requestId, history)
        : makeRequest(makeRequestPayload, history));

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
        value={makeRequestState.subject}
      />
      <MakeRequestTextArea
        onTextAreaChange={handleInputChange('description')}
        placeholder='Description'
        rows={14}
        maxLength={250}
        value={makeRequestState.description}
      />
      <MakeRequestInput
        maxLength={30}
        placeholder='Location'
        type='text'
        name='location'
        onInputChange={handleInputChange('location')}
        error={makeRequestState.errors.location}
        value={makeRequestState.location}
      />
      <MakeRequestButtons>
        <CancelButton text='Cancel' onButtonClick={handleCancel} />
        <Button text='Submit' onButtonClick={handleSubmitRequest} />
      </MakeRequestButtons>
    </MakeRequestForm>
  );

  if (getRequestError) {
    return (
      <MakeRequestContainer>
        <GeneralXLHeader>{`${isEdit ? 'Edit' : 'Make'} Request`}</GeneralXLHeader>
        <>Oops!</>
      </MakeRequestContainer>
    );
  }

  return (
    <MakeRequestContainer>
      <GeneralXLHeader>{`${isEdit ? 'Edit' : 'Make'} Request`}</GeneralXLHeader>
      {isLoading ? <Loader /> : requestForm}
    </MakeRequestContainer>
  );
};

export default MakeRequest;
