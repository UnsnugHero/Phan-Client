import React from 'react';
import { useState } from 'react';
import { RequestSearchFormContainer, RequestSearchBar } from '../styles/Request.style';
import RequestFilterMenu from './RequestFilterMenu';

const RequestSearchForm = () => {
  const [requestSearchForm, setForm] = useState({
    subject: '',
  });

  const handleInputChange = (event) => {
    setForm({ ...requestSearchForm, subject: event.target.value });
  };

  return (
    <RequestSearchFormContainer>
      <RequestSearchBar
        className='request-search-bar'
        name='search'
        placeholder='Search Requests'
        onInputChange={handleInputChange}
        type='text'
        value={requestSearchForm.subject}
      />
      <RequestFilterMenu />
    </RequestSearchFormContainer>
  );
};

export default RequestSearchForm;
