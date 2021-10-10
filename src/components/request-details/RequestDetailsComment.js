import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  CommentEditContainer,
  CommentHeaderContainer,
  CommentHeaderEditedText,
  CommentHeaderText,
  CommentText,
  CommentTextContainer,
  DeleteIcon,
  EditIcon,
  RequestDetailsCommentContainer,
} from '../styles/Request.style';
import RequestCommentTextEditor from './RequestCommentTextEditor';

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const RequestDetailsComment = ({ comment, auth }) => {
  const { userId, username, postedDate, edited, text } = comment;

  const [requestDetailsState, setState] = useState({
    isEditingRequest: false,
    isEditingComment: false,
  });

  const handleEditIconClick = () => {
    setState({
      ...requestDetailsState,
      isEditingComment: true,
    });
  };

  // probably move this to parent component as a binding fn to remove the comment with matching id after making api call
  const handleDeleteIconClick = () => {
    const shouldDelete = window.confirm('Delete Comment?');

    if (shouldDelete) {
      // delete the comment
    }
  };

  const handleCancelEdit = () => {
    setState({
      ...requestDetailsState,
      isEditingComment: false,
    });
  };

  const handleSubmitEdit = () => {
    // submit api call with edit text to edit the selected comment
  };

  return (
    <RequestDetailsCommentContainer className='request-details-comment-container'>
      <CommentHeaderContainer>
        <CommentHeaderText>
          {username} - {postedDate}
        </CommentHeaderText>
        <CommentEditContainer>
          <CommentHeaderEditedText>{edited ? '(edited)' : ''}</CommentHeaderEditedText>
          {auth.user?._id === userId && (
            <div>
              <EditIcon className='edit-icon' src={editIcon} onClick={handleEditIconClick} />
              <DeleteIcon className='delete-icon' src={deleteIcon} onClick={handleDeleteIconClick} />
            </div>
          )}
        </CommentEditContainer>
      </CommentHeaderContainer>
      <CommentTextContainer>
        {requestDetailsState.isEditingComment ? (
          <RequestCommentTextEditor currentText={text} cancelEdit={handleCancelEdit} submitEdit={handleSubmitEdit} />
        ) : (
          <CommentText>{text}</CommentText>
        )}
      </CommentTextContainer>
    </RequestDetailsCommentContainer>
  );
};

RequestDetailsComment.propTypes = {
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapDispatchToProps = ({ auth }) => ({
  auth,
});

export default connect(mapDispatchToProps)(RequestDetailsComment);
