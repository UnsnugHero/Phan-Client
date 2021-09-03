import { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';
import { ChatFormProps } from '../../models/chat.model';

const ChatForm = (props: ChatFormProps) => {
  // hooks
  const [commentContent, setCommentContent] = useState('');

  // handlers
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(event.target.value);
  };

  const handlePostClick = () => {
    // emit comment to the server
    props.socket.emit('postComment', commentContent);
    setCommentContent('');
  };

  return (
    <div className='chat-form-container'>
      <TextInput
        name='comment'
        placeholder='Add a comment...'
        onInputChange={handleInputChange}
        type='text'
        value={commentContent}
      />
      <Button text='Post' onButtonClick={handlePostClick} />
    </div>
  );
};

export default ChatForm;
