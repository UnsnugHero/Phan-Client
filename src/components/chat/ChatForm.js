import { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';

const ChatForm = (props) => {
  // hooks
  const [commentContent, setCommentContent] = useState('');

  // handlers
  const handleInputChange = (event) => {
    setCommentContent(event.target.value);
  };

  const handlePostClick = (event) => {
    event.preventDefault();

    // emit comment to the server
    props.socket.emit('postComment', commentContent);
    setCommentContent('');
  };

  return (
    <form className='chat-form-container'>
      <TextInput
        name='comment'
        placeholder='Add a comment...'
        onInputChange={handleInputChange}
        type='text'
        value={commentContent}
      />
      <Button text='Post' onButtonClick={handlePostClick} />
    </form>
  );
};

export default ChatForm;
