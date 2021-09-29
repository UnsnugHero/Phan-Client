import { CheckboxContainer, CheckBoxLabel, CheckboxInput, CustomCheckboxInput } from '../styles/Checkbox.style';

const Checkbox = (props) => {
  return (
    <CheckboxContainer className='checkbox-container'>
      <CheckBoxLabel className='label'>
        <CheckboxInput
          className='checkbox'
          name={props.name}
          type='checkbox'
          onChange={(e) => props.onInputChange(e)}
          checked={props.checked}
        />
        <CustomCheckboxInput className='checkmark' />
        <span style={{ paddingLeft: '16px' }}>{props.text}</span>
      </CheckBoxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
