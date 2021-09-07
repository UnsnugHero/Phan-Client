import PropTypes from 'prop-types';

const TextInput = (props) => {
  return (
    <input
      autoComplete={props.autocomplete || 'off'}
      className='text-input'
      name={props.name}
      onChange={(e) => props.onInputChange(e)}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    ></input>
  );
};

TextInput.propTypes = {
  maxLength: PropTypes.number,
  onInputChange: PropTypes.func.isRequired,
};

export default TextInput;
