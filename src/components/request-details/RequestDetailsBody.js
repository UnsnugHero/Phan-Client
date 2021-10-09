import React from 'react';
import PropTypes from 'prop-types';

import {
  RequestDetailsBodyContainer,
  RequestDetailsRow,
  RequestDetailsRowBody,
  RequestDetailsRowHeader,
} from '../styles/Request.style';
import { REQUEST_DETAILS_ROWS } from './RequestDetails.constants';

const RequestDetailsBody = ({ request }) => {
  return (
    <RequestDetailsBodyContainer>
      {REQUEST_DETAILS_ROWS.map((row, idx) => (
        <RequestDetailsRow key={idx} className={`${row.valueKey}-row`}>
          <RequestDetailsRowHeader className={`${row.valueKey}-row-header`}>{row.header}</RequestDetailsRowHeader>
          <RequestDetailsRowBody className={`${row.valueKey}-row-body`}>{request[row.valueKey]}</RequestDetailsRowBody>
        </RequestDetailsRow>
      ))}
    </RequestDetailsBodyContainer>
  );
};

RequestDetailsBody.propTypes = {
  request: PropTypes.object.isRequired,
};

export default RequestDetailsBody;
