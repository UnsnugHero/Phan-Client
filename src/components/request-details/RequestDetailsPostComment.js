import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { postRequestComment } from '../../redux/actions/request.action';
import {
  PostCommentButtonsContainer,
  PostCommentCancelButton,
  PostCommentContainer,
  PostCommentEditor,
  PostCommentPostButton,
} from '../styles/Request.style';

const RequestDetailsPostComment = ({ postRequestComment }) => {
  const { requestId } = useParams();

  const [formValue, setForm] = useState({
    commentValue: '',
    isActive: false,
  });

  const handleTextAreaClick = () => {
    setForm({
      ...formValue,
      isActive: true,
    });
  };

  const handleTextAreaChange = (event) => {
    setForm({
      ...formValue,
      commentValue: event.target.value,
    });
  };

  const handleCancelClick = () => {
    setForm({
      commentValue: '',
      isActive: false,
    });
  };

  const handlePostClick = () => {
    const postRequestCommentPayload = {
      text: formValue.commentValue,
    };

    postRequestComment(postRequestCommentPayload, requestId);

    setForm({
      commentValue: '',
      isActive: false,
    });
  };

  return (
    <PostCommentContainer>
      <PostCommentEditor
        placeholder='Post a comment...'
        onTextAreaChange={handleTextAreaChange}
        onTextAreaClick={handleTextAreaClick}
        value={formValue.commentValue}
      />
      {formValue.isActive && (
        <PostCommentButtonsContainer>
          <PostCommentCancelButton text='Cancel' onButtonClick={handleCancelClick} />
          <PostCommentPostButton text='Post' onButtonClick={handlePostClick} disabled={formValue.commentValue === ''} />
        </PostCommentButtonsContainer>
      )}
    </PostCommentContainer>
  );
};

const mapDispatchToProps = {
  postRequestComment,
};

export default connect(null, mapDispatchToProps)(RequestDetailsPostComment);
