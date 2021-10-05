import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextArea, TextAreaContainer } from '../styles/TextArea.style';

const TextArea = (props) => {
  return (
    <TextAreaContainer>
      <StyledTextArea
        cols={props.columns}
        draggable={false}
        onChange={(e) => props.onTextareaChange(e)}
        placeholder={props.placeholder}
        rows={props.rows}
      ></StyledTextArea>
    </TextAreaContainer>
  );
};

TextArea.propTypes = {
  cols: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default TextArea;
