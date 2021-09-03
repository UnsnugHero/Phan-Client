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
  maxLength?: number;
  name: string;
  onInputChange: Function;
  value: string;
  placeholder: string;
}
