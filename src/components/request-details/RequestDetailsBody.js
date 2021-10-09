import React from 'react';
import PropTypes from 'prop-types';

import { RequestDetailsBodyContainer } from '../styles/Request.style';

const RequestDetailsBody = ({ request }) => {
  const { subject, descript, location } = request;

  return <RequestDetailsBodyContainer></RequestDetailsBodyContainer>;
};

RequestDetailsBody.propTypes = {
  request: PropTypes.object.isRequired,
};

export default RequestDetailsBody;
