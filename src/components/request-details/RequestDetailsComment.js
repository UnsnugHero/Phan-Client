import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  CommentHeaderContainer,
  CommentHeaderEditedText,
  CommentHeaderText,
  CommentText,
  RequestDetailsCommentContainer,
} from '../styles/Request.style';

const RequestDetailsComment = ({ postedBy, postedDate, edited, text, auth }) => {
  return (
    <RequestDetailsCommentContainer>
      <CommentHeaderContainer>
        <CommentHeaderText>
          {postedBy} - {postedDate}
        </CommentHeaderText>
        <CommentHeaderEditedText>{edited ? '(edited)' : ''}</CommentHeaderEditedText>
      </CommentHeaderContainer>
      <CommentText>{text}</CommentText>
    </RequestDetailsCommentContainer>
  );
};

RequestDetailsComment.propTypes = {
  postedBy: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  edited: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const mapDispatchToProps = ({ auth }) => ({
  auth,
});

export default connect(mapDispatchToProps)(RequestDetailsComment);
