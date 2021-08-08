import PropTypes from 'prop-types';

import GeneralComment from './ChatComment';
import { ChatCommentListProps } from '../../models/chat.model';

const ChatCommentList = (props: ChatCommentListProps) => {
  return (
    <div>
      {props.comments.map((comment, idx) => (
        <GeneralComment
          key={idx}
          content={comment.content}
          username={comment.username}
        />
      ))}
    </div>
  );
};

ChatCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ChatCommentList;
