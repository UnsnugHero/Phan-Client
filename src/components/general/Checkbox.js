import PropTypes from 'prop-types';

import { CheckboxContainer, CheckBoxLabel, CheckboxInput, CustomCheckboxInput } from '../styles/Checkbox.style';

const Checkbox = (props) => {
  return (
    <CheckboxContainer className='checkbox-container'>
      <CheckBoxLabel className='label'>
        <CheckboxInput
          className='checkbox'
          name={props.name}
          type='checkbox'
          onChange={(e) => props.onCheckboxClick(e)}
          checked={props.checked}
        />
        <CustomCheckboxInput className='checkmark' />
        <span style={{ paddingLeft: '16px' }}>{props.text}</span>
      </CheckBoxLabel>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
