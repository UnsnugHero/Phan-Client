import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CancelEditIcon,
  CommentTextEditor,
  CommentTextEditorContainer,
  ConfirmEditIcon,
  TextEditorButtons,
} from '../styles/Request.style';

import clear from '../../assets/close.svg';
import check from '../../assets/check.svg';

const RequestCommentTextEditor = ({ currentText, cancelEdit, submitEdit }) => {
  const [textEditorState, setState] = useState({
    editText: currentText,
  });

  const handleTextAreaChange = (event) => {
    console.log(event.target.value);
    setState({
      editText: event.target.value,
    });
  };

  return (
    <CommentTextEditorContainer>
      <CommentTextEditor
        placeholder={textEditorState.editText}
        onTextAreaChange={handleTextAreaChange}
        value={textEditorState.editText}
      />
      <TextEditorButtons>
        <CancelEditIcon src={clear} onClick={cancelEdit} />
        <ConfirmEditIcon src={check} onClick={submitEdit} />
      </TextEditorButtons>
    </CommentTextEditorContainer>
  );
};

RequestCommentTextEditor.propTypes = {
  currentText: PropTypes.string.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
};

export default RequestCommentTextEditor;
