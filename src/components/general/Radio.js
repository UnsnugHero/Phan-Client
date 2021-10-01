import React from 'react';
import PropTypes from 'prop-types';

import { CustomRadioInput, RadioContainer, RadioInput, RadioLabel } from '../styles/Radio.style';

const Radio = (props) => {
  return (
    <RadioContainer className={`radio-container ${props.className ? props.className : ''}`}>
      <RadioLabel className='label'>
        <RadioInput
          className='radio'
          checked={props.checked}
          name={props.name}
          type='radio'
          onClick={() => props.onClick(props.value)}
        />
        <CustomRadioInput className='checkmark' />
        <span style={{ paddingLeft: '16px' }}>{props.text}</span>
      </RadioLabel>
    </RadioContainer>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default Radio;
