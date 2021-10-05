import React from 'react';
import PropTypes from 'prop-types';

import {
  RequestListEntryBody,
  RequestListEntryHeader,
  RequestListEntryLeftInfo,
  RequestListEntryRightInfo,
  RequestListEntryContainer,
  RequestListEntryLikesContainer,
  RequestListEntryText,
  ThumbsUpImg,
} from '../styles/Request.style';

import thumbsUp from '../../assets/thumbs-up-solid.svg';

const RequestListEntry = ({ subject, location, likesCount, postedDate, completed }) => {
  return (
    <RequestListEntryContainer className='list-entry-container'>
      <RequestListEntryHeader className='list-entry-header'>{subject}</RequestListEntryHeader>
      <RequestListEntryBody className='list-entry-body'>
        <RequestListEntryLeftInfo className='list-entry-left-info'>
          <RequestListEntryText style={{ marginBottom: '12px' }}>{location}</RequestListEntryText>
          <RequestListEntryLikesContainer>
            <ThumbsUpImg src={thumbsUp} />
            <RequestListEntryText>{likesCount}</RequestListEntryText>
          </RequestListEntryLikesContainer>
        </RequestListEntryLeftInfo>
        <RequestListEntryRightInfo className='list-entry-right-info'>
          <RequestListEntryText style={{ marginBottom: '12px' }}>{postedDate}</RequestListEntryText>
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
};

export default RequestListEntry;
