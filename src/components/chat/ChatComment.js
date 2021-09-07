import PropTypes from 'prop-types';

const ChatComment = (props) => {
  return (
    <div className='comment-container'>
      <span className='comment-user'>{props.author || 'Anon'}</span>:
      <span className='comment-text'>{props.content}</span>
    </div>
  );
};

ChatComment.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default ChatComment;
