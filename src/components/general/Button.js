import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className='button' onClick={(e) => props.onButtonClick(e)}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
