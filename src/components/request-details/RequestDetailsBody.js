import React from 'react';
import PropTypes from 'prop-types';

import { RequestDetailsBodyContainer } from '../styles/Request.style';

const RequestDetailsBody = ({ request }) => {
  const { subject, description, location } = request;

  return <RequestDetailsBodyContainer></RequestDetailsBodyContainer>;
};

RequestDetailsBody.propTypes = {
  request: PropTypes.object.isRequired,
};

export default RequestDetailsBody;
