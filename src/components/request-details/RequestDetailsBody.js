import React from 'react';
import PropTypes from 'prop-types';

import {
  Icon,
  RequestCompletionStatus,
  RequestDetailsBodyContainer,
  RequestDetailsBodyTopInfo,
  RequestDetailsRow,
  RequestDetailsRowBody,
  RequestDetailsRowHeader,
  RequestDetailsRowsContainer,
  RequestListEntryCountsContainer,
} from '../styles/Request.style';
import { REQUEST_DETAILS_ROWS } from './RequestDetails.constants';

import thumbsUp from '../../assets/thumbs-up-solid.svg';

const RequestDetailsBody = ({ request }) => {
  return (
    <RequestDetailsBodyContainer className='request-details-body-container'>
      <RequestDetailsBodyTopInfo className='body-top-info'>
        <RequestCompletionStatus className='completion-status'>
          <span className='status-text'>
            Completion Status:{' '}
            <span style={{ color: request.isCompleted ? 'green' : '#db1b0d' }}>
              {request.isCompleted ? 'Completed' : 'Open'}
            </span>
          </span>
        </RequestCompletionStatus>
        <RequestListEntryCountsContainer style={{ marginRight: '12px' }}>
          <Icon src={thumbsUp} style={{ paddingBottom: '10px' }} />
          <span>{request.likesCount}</span>
        </RequestListEntryCountsContainer>
      </RequestDetailsBodyTopInfo>
      <RequestDetailsRowsContainer>
        {REQUEST_DETAILS_ROWS.map((row, idx) => (
          <RequestDetailsRow key={idx} className={`${row.valueKey}-row`}>
            <RequestDetailsRowHeader className={`${row.valueKey}-row-header`}>{row.header}</RequestDetailsRowHeader>
            <RequestDetailsRowBody className={`${row.valueKey}-row-body`}>
              {request[row.valueKey]}
            </RequestDetailsRowBody>
          </RequestDetailsRow>
        ))}
      </RequestDetailsRowsContainer>
    </RequestDetailsBodyContainer>
  );
};

RequestDetailsBody.propTypes = {
  request: PropTypes.object.isRequired,
};

export default RequestDetailsBody;
