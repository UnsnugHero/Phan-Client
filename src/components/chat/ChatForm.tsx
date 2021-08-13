import { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';
import { ChatFormProps } from '../../models/chat.model';

const ChatForm = (props: ChatFormProps) => {
  // hooks
  const [commentContent, setCommentContent] = useState('');

  // handlers
  const handleInputChange = (text: string) => {
    setCommentContent(text);
  };

  const handlePostClick = () => {
    // emit comment to the server
    props.socket.emit('postComment', commentContent);
    setCommentContent('');
  };

  return (
    <div className='chat-form-container'>
      <TextInput
        text='Add a comment...'
        onInputChange={handleInputChange}
        value={commentContent}
      />
      <Button text='Post' onButtonClick={handlePostClick} />
    </div>
  );
};

export default ChatForm;
