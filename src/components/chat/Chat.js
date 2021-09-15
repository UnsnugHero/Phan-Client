import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import ChatForm from './ChatForm';
import ChatCommentList from './ChatCommentList';

const socket = io('http://localhost:5000');

const Chat = () => {
  const initialComments = [];

  // hooks

  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    subscribeChat();

    return () => {
      socket.disconnect();
    };
  }, []);

  // helpers

  const subscribeChat = () => {
    socket.on('newComment', (comment) => {
      const newComment = {
        content: comment,
        username: comment.username ? comment.username : 'Anon'
      };

      setComments((prevComments) => [...prevComments, newComment]);
    });
  };

  // render

  return (
    <div>
      <ChatCommentList comments={comments} />
      <ChatForm socket={socket} />
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
