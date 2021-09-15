import PropTypes from 'prop-types';

const TextInput = (props) => {
  let hasInputError = !!props.error;

  return (
    <div className='text-input-container'>
      <input
        autoComplete={props.autocomplete || 'off'}
        className='text-input'
        name={props.name}
        onChange={(e) => props.onInputChange(e)}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      ></input>
      {hasInputError && <span className='text-input-error'>{props.error}</span>}
    </div>
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
