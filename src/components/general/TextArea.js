import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextArea, TextAreaContainer } from '../styles/TextArea.style';
import { TextInputError } from '../styles/TextInput.style';

const TextArea = (props) => {
  let hasInputError = !!props.error;

  return (
    <TextAreaContainer className='text-area'>
      <StyledTextArea
        autoComplete='off'
        maxLength={props.maxLength}
        onChange={(e) => props.onTextAreaChange(e)}
        placeholder={props.placeholder}
        rows={props.rows}
        value={props.value}
      ></StyledTextArea>
      {hasInputError && <TextInputError>{props.error}</TextInputError>}
    </TextAreaContainer>
  );
};

TextArea.propTypes = {
  error: PropTypes.string,
  onTextAreaChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
