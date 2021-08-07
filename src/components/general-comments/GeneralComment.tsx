import PropTypes from 'prop-types';

import { GeneralCommentProps } from '../../models/general.model';

const GeneralComment = (props: GeneralCommentProps) => {
  return (
    <div className='comment-container'>
      <span className='comment-user'>{props.username || 'Anon'}</span>
      <span className='comment-text'>{props.content}</span>
    </div>
  );
};

GeneralComment.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string,
};

export default GeneralComment;
