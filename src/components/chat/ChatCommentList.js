import PropTypes from 'prop-types';

import { ChatList, ChatListContainer } from '../styles/Chat.style';
import ChatComment from './ChatComment';

const ChatCommentList = (props) => {
  return (
    <ChatListContainer>
      <ChatList>
        {props.comments.map((comment, idx) => (
          <ChatComment key={idx} content={comment.content} author={comment.author} />
        ))}
      </ChatList>
    </ChatListContainer>
  );
};

ChatCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ChatCommentList;
