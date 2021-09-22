import { useState, useRef } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';
import { StyledChatForm } from '../styles/Chat.style';

const ChatForm = ({ socket }) => {
  // hooks
  const addCommentInputRef = useRef(null);
  const [commentContent, setCommentContent] = useState('');

  // handlers
  const handleInputChange = (event) => {
    setCommentContent(event.target.value);
  };

  const handlePostClick = (event) => {
    event.preventDefault();

    // TODO: maybe with this? idk how I feel about the flashing input between post and focus
    addCommentInputRef.current.focus();

    // emit comment to the server
    if (commentContent !== '') {
      socket.emit('postComment', commentContent);
      setCommentContent('');
    }
  };

  return (
    <StyledChatForm>
      <TextInput
        innerRef={addCommentInputRef}
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
