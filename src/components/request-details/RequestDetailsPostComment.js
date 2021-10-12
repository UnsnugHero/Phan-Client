import React, { useState } from 'react';
import {
  PostCommentButtonsContainer,
  PostCommentCancelButton,
  PostCommentContainer,
  PostCommentEditor,
  PostCommentPostButton,
} from '../styles/Request.style';

const RequestDetailsPostComment = () => {
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
    setForm(event.target.value);
  };

  const handleCancelClick = () => {
    setForm({
      commentValue: '',
      isActive: false,
    });
  };

  const handlePostClick = () => {
    // post comment dispatch

    setForm('');
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
          <PostCommentPostButton text='Post' onButtonClick={handlePostClick} />
        </PostCommentButtonsContainer>
      )}
    </PostCommentContainer>
  );
};

export default RequestDetailsPostComment;
