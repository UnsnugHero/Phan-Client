import PropTypes from 'prop-types';

import { ChatListContainer } from '../styles/Chat.style';
import ChatComment from './ChatComment';

const ChatCommentList = (props) => {
  return (
    <ChatListContainer>
      {props.comments.map((comment, idx) => (
        <ChatComment key={idx} content={comment.content} author={comment.author} />
      ))}
    </ChatListContainer>
  );
};

ChatCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ChatCommentList;
