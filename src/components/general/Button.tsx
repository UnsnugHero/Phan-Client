import PropTypes from 'prop-types';

import { ButtonProps } from '../../models/general';

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className='button' onClick={() => props.onButtonClick()}>
        {props.text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
