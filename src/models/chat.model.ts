export interface ChatComment {
  content: string;
  username?: string;
}

// props

export interface ChatCommentProps {
  content: string;
  username?: string;
}

export interface ChatCommentListProps {
  comments: ChatComment[];
}
