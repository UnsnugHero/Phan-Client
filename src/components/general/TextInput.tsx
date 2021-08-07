import PropTypes from 'prop-types';

import { TextInputProps } from '../../models/general';

const TextInput = (props: TextInputProps) => {
  return (
    <div>
      <input
        className='text-input'
        maxLength={props.maxLength}
        onChange={(e) => props.onInputChange(e.target.value)}
        type='text'
      ></input>
    </div>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TextInput;
