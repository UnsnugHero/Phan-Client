import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../general/TextInput';
import Button from '../general/Button';

const ChatForm = () => {
  const [commentText, setCommentText] = useState('');

  // handlers
  const handleInputChange = (text: string) => {
    setCommentText(text);
  };

  const handlePostClick = () => {
    console.error(commentText);
  };

  return (
    <div className='chat-form-container'>
      <TextInput text='Add a comment...' onInputChange={handleInputChange} />
      <Button text='Post' onButtonClick={handlePostClick} />
    </div>
  );
};

ChatForm.propTypes = {};

export default ChatForm;
