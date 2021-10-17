import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

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
import { likeRequest, unlikeRequest } from '../../redux/actions/request.action';

import thumbsUp from '../../assets/thumbs-up-solid.svg';

const RequestDetailsBody = ({ request, isAuthenticated, user, likeRequest, unlikeRequest }) => {
  const { requestId } = useParams();

  const handleOnThumbsUpClick = () => {
    if (isAuthenticated) {
      if (request.likes.includes(user._id)) {
        unlikeRequest(requestId);
      } else {
        likeRequest(requestId);
      }
    }
  };

  return (
    <RequestDetailsBodyContainer className='request-details-body-container'>
      <RequestDetailsBodyTopInfo className='body-top-info'>
        <RequestCompletionStatus className='completion-status'>
          <span className='status-text'>
            Completion Status:{' '}
            <span style={{ color: request.completed ? 'green' : '#db1b0d' }}>
              {request.completed ? 'Completed' : 'Open'}
            </span>
          </span>
        </RequestCompletionStatus>
        <RequestListEntryCountsContainer style={{ marginRight: '12px' }}>
          <Icon
            src={thumbsUp}
            style={{ paddingBottom: '10px', cursor: isAuthenticated ? 'pointer' : '' }}
            onClick={handleOnThumbsUpClick}
          />
          <span>{request.likesCount}</span>
        </RequestListEntryCountsContainer>
      </RequestDetailsBodyTopInfo>
      <RequestDetailsRowsContainer>
        {REQUEST_DETAILS_ROWS.map((row, idx) => (
          <RequestDetailsRow key={idx} className={`${row.valueKey}-row`}>
            <RequestDetailsRowHeader className={`${row.valueKey}-row-header`}>{row.header}</RequestDetailsRowHeader>
            <RequestDetailsRowBody className={`${row.valueKey}-row-body`}>
              {request[row.valueKey] || 'Not Provided'}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = {
  likeRequest,
  unlikeRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetailsBody);
