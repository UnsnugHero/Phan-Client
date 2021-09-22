import { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';
import { StyledChatForm } from '../styles/Chat.style';

const ChatForm = ({ socket }) => {
  // hooks
  const [commentContent, setCommentContent] = useState('');

  // handlers
  const handleInputChange = (event) => {
    setCommentContent(event.target.value);
  };

  const handlePostClick = (event) => {
    event.preventDefault();

    // emit comment to the server
    socket.emit('postComment', commentContent);
    setCommentContent('');
  };

  return (
    <StyledChatForm>
      <TextInput
        name='comment'
        placeholder='Add a comment...'
        onInputChange={handleInputChange}
        type='text'
        value={commentContent}
      />
      <Button text='Post' onButtonClick={handlePostClick} />
    </StyledChatForm>
  );
};

export default ChatForm;
