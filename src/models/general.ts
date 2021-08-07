// Button models

export interface ButtonProps {
  onButtonClick: Function;
  text: string;
}

export interface TextInputProps {
  onInputChange: Function;
  text: string;
  maxLength?: number;
}
