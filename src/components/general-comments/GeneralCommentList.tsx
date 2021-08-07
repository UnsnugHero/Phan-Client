import PropTypes from 'prop-types';

import GeneralComment from './GeneralComment';
import { GeneralCommentListProps } from '../../models/general.model';

const GeneralCommentList = (props: GeneralCommentListProps) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <GeneralComment content={comment.content} username={comment.username} />
      ))}
    </div>
  );
};

GeneralCommentList.propTypes = {
  comment: PropTypes.array.isRequired,
};

export default GeneralCommentList;
