import PropTypes from 'prop-types';

import ChatComment from './ChatComment';

const ChatCommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment, idx) => (
        <ChatComment key={idx} content={comment.content} author={comment.author} />
      ))}
    </div>
  );
};

ChatCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ChatCommentList;
