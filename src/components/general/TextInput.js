import PropTypes from 'prop-types';

import { StyledTextInput, TextInputContainer, TextInputError } from '../styles/TextInput.style';

const TextInput = (props) => {
  let hasInputError = !!props.error;

  return (
    <TextInputContainer className={`text-input-container ${props.className || ''}`}>
      <StyledTextInput
        autoComplete={props.autocomplete || 'off'}
        className='text-input'
        maxLength={props.maxLength}
        name={props.name}
        onChange={(e) => props.onInputChange(e)}
        placeholder={props.placeholder}
        ref={props.innerRef}
        type={props.type}
        value={props.value}
      ></StyledTextInput>
      {hasInputError && <TextInputError>{props.error}</TextInputError>}
    </TextInputContainer>
  );
};

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  error: PropTypes.string,
  innerRef: PropTypes.object,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default TextInput;
