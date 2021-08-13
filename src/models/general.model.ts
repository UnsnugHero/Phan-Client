// Props Models

export interface ButtonProps {
  onButtonClick: Function;
  text: string;
}

export interface TextInputProps {
  maxLength?: number;
  onInputChange: Function;
  value: string;
  text: string;
}
