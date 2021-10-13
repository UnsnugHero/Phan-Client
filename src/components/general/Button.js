import PropTypes from 'prop-types';

import { StyledButton } from '../styles/Button.style';

const Button = (props) => {
  return (
    <StyledButton
      disabled={props.disabled}
      className={`button ${props.className}`}
      style={{ cursor: props.disabled ? 'not-allowed' : '' }}
      onClick={(e) => props.onButtonClick(e)}
    >
      {props.text}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
