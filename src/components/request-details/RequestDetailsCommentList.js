import React from 'react';
import PropTypes from 'prop-types';

import { CommentListHeader, RequestDetailsCommentListContainer } from '../styles/Request.style';
import RequestDetailsComment from './RequestDetailsComment';

const RequestDetailsCommentList = ({ comments }) => {
  return (
    <RequestDetailsCommentListContainer>
      <CommentListHeader>{`Comments (${comments?.length || 0})`}</CommentListHeader>
      {comments &&
        comments.length &&
        comments.map((comment, idx) => (
          <RequestDetailsComment
            key={idx}
            postedBy={comment.username}
            postedDate={comment.postedDate}
            edited={comment.edited}
            text={comment.text}
          />
        ))}
    </RequestDetailsCommentListContainer>
  );
};

RequestDetailsCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default RequestDetailsCommentList;
