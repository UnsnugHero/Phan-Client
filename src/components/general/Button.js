import PropTypes from 'prop-types';

import { StyledButton } from '../styles/Button.style';

const Button = (props) => {
  return (
    <StyledButton className={`button ${props.className}`} onClick={(e) => props.onButtonClick(e)}>
      {props.text}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
