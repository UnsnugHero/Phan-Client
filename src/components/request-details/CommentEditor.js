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

const CommentEditor = ({ currentText, cancelEdit, submitEdit }) => {
  const [textEditorState, setState] = useState({
    isDisabled: false,
    editText: currentText,
  });

  const handleTextAreaChange = (event) => {
    setState({
      isDisabled: event.target.value === '',
      editText: event.target.value,
    });
  };

  const handleSubmitClick = () => {
    if (!textEditorState.isDisabled) {
      submitEdit(textEditorState.editText);
    }
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
        <ConfirmEditIcon
          src={check}
          style={{ cursor: textEditorState.isDisabled ? 'not-allowed' : '' }}
          onClick={handleSubmitClick}
        />
      </TextEditorButtons>
    </CommentTextEditorContainer>
  );
};

CommentEditor.propTypes = {
  currentText: PropTypes.string.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
};

export default CommentEditor;
