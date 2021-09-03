// Props Models

export interface ButtonProps {
  onButtonClick: Function;
  text: string;
}

export interface CheckboxProps {
  checked: boolean;
  name: string;
  onInputChange: Function;
  text: string;
}

export interface TextInputProps {
  autocomplete?: 'on' | 'off';
  maxLength?: number;
  name: string;
  onInputChange: Function;
  value: string;
  placeholder: string;
  type: 'text' | 'password';
}
