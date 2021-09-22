import PropTypes from 'prop-types';
import { CommentContainer } from '../styles/Chat.style';

const ChatComment = (props) => {
  return (
    <CommentContainer className='comment-container'>
      <span className='comment-user'>{props.author || 'Anon'}</span>:{' '}
      <span className='comment-text'>{props.content}</span>
    </CommentContainer>
  );
};

ChatComment.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default ChatComment;
