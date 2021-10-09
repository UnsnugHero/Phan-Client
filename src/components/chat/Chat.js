import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { ChatContainer } from '../styles/Chat.style';
import { GeneralXLHeader } from '../styles/App.style';

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
    socket.on('connect', () => {});

    socket.on('newComment', (comment) => {
      const newComment = {
        content: comment,
        username: 'Anon',
      };

      setComments((prevComments) => [...prevComments, newComment]);
    });
  };

  // render

  return (
    <ChatContainer>
      <GeneralXLHeader>Chat Room</GeneralXLHeader>
      <ChatCommentList comments={comments} />
      <ChatForm socket={socket} />
    </ChatContainer>
  );
};

Chat.propTypes = {};

export default Chat;
