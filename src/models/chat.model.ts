import { Socket } from 'socket.io-client';

export interface ChatComment {
  content: string;
  author?: string;
}

export interface PostCommentPayload {
  content: string;
  author?: string;
}

// props

export interface ChatCommentProps {
  content: string;
  author?: string;
}

export interface ChatCommentListProps {
  comments: ChatComment[];
}

export interface ChatFormProps {
  socket: Socket;
}
