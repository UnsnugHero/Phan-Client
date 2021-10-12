import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CommentListHeader, RequestDetailsCommentListContainer } from '../styles/Request.style';
import RequestDetailsComment from './RequestDetailsComment';
import RequestDetailsPostComment from './RequestDetailsPostComment';

const RequestDetailsCommentList = ({ comments, isAuthenticated }) => {
  return (
    <RequestDetailsCommentListContainer>
      <CommentListHeader>{`Comments (${comments?.length || 0})`}</CommentListHeader>
      {isAuthenticated && <RequestDetailsPostComment />}
      {comments?.length > 0 && comments.map((comment, idx) => <RequestDetailsComment key={idx} comment={comment} />)}
    </RequestDetailsCommentListContainer>
  );
};

RequestDetailsCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetailsCommentList);
