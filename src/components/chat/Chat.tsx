import { useState } from 'react';

import ChatCommentList from './ChatCommentList';
import ChatForm from './ChatForm';

const Chat = () => {
  const dummyComments = [
    { content: 'wow1', username: 'Anon' },
    { content: 'wow2', username: 'Neenis' },
    { content: 'wow3', username: 'Anon' },
    { content: 'wow4' },
  ];

  const [comments] = useState(dummyComments);

  return (
    <div>
      <ChatCommentList comments={comments} />
      <ChatForm />
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
