import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import {
  RequestListEntryBody,
  RequestListEntryHeader,
  RequestListEntryLeftInfo,
  RequestListEntryRightInfo,
  RequestListEntryContainer,
  RequestListEntryCountsContainer,
  RequestListEntryText,
  Icon,
  RequestListEntryLeftBottomRow,
} from '../styles/Request.style';

import thumbsUp from '../../assets/thumbs-up-solid.svg';
import commentIcon from '../../assets/chat_white_24dp.svg';

const RequestListEntry = ({ _id, subject, location, likesCount, postedDate, completed, comments }) => {
  const history = useHistory();
  const formattedDate = new Date(postedDate).toLocaleDateString('en-US');

  const handleEntryClick = () => {
    history.push(`/requests/${_id}`);
  };

  return (
    <RequestListEntryContainer className='list-entry-container' onClick={handleEntryClick}>
      <RequestListEntryHeader className='list-entry-header'>{subject}</RequestListEntryHeader>
      <RequestListEntryBody className='list-entry-body'>
        <RequestListEntryLeftInfo className='list-entry-left-info'>
          <RequestListEntryText style={{ marginBottom: '12px' }}>{location}</RequestListEntryText>
          <RequestListEntryLeftBottomRow>
            <RequestListEntryCountsContainer style={{ marginRight: '12px' }}>
              <Icon src={thumbsUp} style={{ paddingBottom: '5px' }} />
              <RequestListEntryText>{likesCount}</RequestListEntryText>
            </RequestListEntryCountsContainer>
            <RequestListEntryCountsContainer>
              <Icon src={commentIcon} />
              <RequestListEntryText>{comments.length}</RequestListEntryText>
            </RequestListEntryCountsContainer>
          </RequestListEntryLeftBottomRow>
        </RequestListEntryLeftInfo>
        <RequestListEntryRightInfo className='list-entry-right-info'>
          <RequestListEntryText style={{ marginBottom: '12px' }}>{formattedDate}</RequestListEntryText>
          <RequestListEntryText style={{ color: completed ? 'green' : '#db1b0d' }}>{`${
            completed ? 'Completed' : 'Open'
          }`}</RequestListEntryText>
        </RequestListEntryRightInfo>
      </RequestListEntryBody>
    </RequestListEntryContainer>
  );
};

RequestListEntry.propTypes = {
  subject: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  postedDate: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
};

export default RequestListEntry;
