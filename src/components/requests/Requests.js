import React from 'react';
import { GeneralXLHeader } from '../styles/App.style';
import RequestSearchForm from './RequestSearchForm';

const Requests = () => {
  return (
    <>
      <GeneralXLHeader>Request Search</GeneralXLHeader>
      <RequestSearchForm />
    </>
  );
};

export default Requests;
