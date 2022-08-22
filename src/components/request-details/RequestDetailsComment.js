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
import { deleteRequestComment, editRequestComment } from '../../redux/actions/request.action';
import CommentEditor from './CommentEditor';

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import { useParams } from 'react-router';

const RequestDetailsComment = ({ comment, auth, editRequestComment, deleteRequestComment }) => {
  const { requestId } = useParams();

  const { _id: commentId, userId, username, postedDate, edited, text } = comment;
  const formattedDate = new Date(postedDate).toLocaleDateString('en-US');

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
      deleteRequestComment(requestId, commentId);
    }
  };

  const handleCancelEdit = () => {
    setState({
      ...requestDetailsState,
      isEditingComment: false,
    });
  };

  const handleSubmitEdit = (editText) => {
    const editRequestCommentPayload = { text: editText };
    editRequestComment(editRequestCommentPayload, requestId, commentId);
    setState({
      ...requestDetailsState,
      isEditingComment: false,
    });
  };

  return (
    <RequestDetailsCommentContainer className='request-details-comment-container'>
      <CommentHeaderContainer>
        <CommentHeaderText>
          {username} - {formattedDate}
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
          <CommentEditor currentText={text} cancelEdit={handleCancelEdit} submitEdit={handleSubmitEdit} />
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
  editRequestComment: PropTypes.func.isRequired,
  deleteRequestComment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = {
  deleteRequestComment,
  editRequestComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetailsComment);
