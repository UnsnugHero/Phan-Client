import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import ChatForm from './ChatForm';
import ChatCommentList from './ChatCommentList';
import { ChatContainer, ChatHeader } from '../styles/Chat.style';

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
    socket.on('connect', () => {});

    socket.on('newComment', (comment) => {
      const newComment = {
        content: comment,
        username: comment.username ? comment.username : 'Anon',
      };

      setComments((prevComments) => [...prevComments, newComment]);
    });
  };

  // render

  return (
    <ChatContainer>
      <ChatHeader>Phantom Chat Room</ChatHeader>
      <ChatCommentList comments={comments} />
      <ChatForm socket={socket} />
    </ChatContainer>
  );
};

Chat.propTypes = {};

export default Chat;
