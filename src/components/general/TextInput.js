import PropTypes from 'prop-types';

import { StyledTextInput, TextInputContainer, TextInputError } from '../styles/TextInput.style';

const TextInput = (props) => {
  let hasInputError = !!props.error;

  return (
    <TextInputContainer className={props.className}>
      <StyledTextInput
        autoComplete={props.autocomplete || 'off'}
        className='text-input'
        name={props.name}
        onChange={(e) => props.onInputChange(e)}
        placeholder={props.placeholder}
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
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default TextInput;
