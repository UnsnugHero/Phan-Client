import PropTypes from 'prop-types';

import { TextInputProps } from '../../models/general.model';

/**
 * Notes
 *
 * = want the maxLength prop to control an error border around the input tentatively...
 */

const TextInput = (props: TextInputProps) => {
  return (
    <input
      className='text-input'
      onChange={(e) => props.onInputChange(e.target.value)}
      type='text'
    ></input>
  );
};

TextInput.propTypes = {
  maxLength: PropTypes.number,
  onInputChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextInput;
