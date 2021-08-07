// Props Models

import { GeneralComment } from './general-comments.model';

export interface ButtonProps {
  onButtonClick: Function;
  text: string;
}

export interface GeneralCommentProps {
  content: string;
  username?: string;
}

export interface GeneralCommentListProps {
  comments: GeneralComment[];
}

export interface TextInputProps {
  onInputChange: Function;
  text: string;
  maxLength?: number;
}
