import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextArea, TextAreaContainer } from '../styles/TextArea.style';
import { TextInputError } from '../styles/TextInput.style';

const TextArea = (props) => {
  let hasInputError = !!props.error;

  const handleOnClick = () => {
    if (props.onTextAreaClick) {
      props.onTextAreaClick();
    }
  };

  return (
    <TextAreaContainer className='text-area'>
      <StyledTextArea
        autoComplete='off'
        maxLength={props.maxLength}
        onChange={(e) => props.onTextAreaChange(e)}
        onClick={(e) => handleOnClick()}
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
  onTextAreaClick: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string,
};

export default TextArea;
