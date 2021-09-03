import { CheckboxProps } from '../../models/general.model';

const Checkbox = (props: CheckboxProps) => {
  return (
    <label>
      <input
        className='checkbox'
        name={props.name}
        type='checkbox'
        onChange={(e) => props.onInputChange(e)}
        checked={props.checked}
      ></input>
      {props.text}
    </label>
  );
};

export default Checkbox;
