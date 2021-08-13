import axios from 'axios';
import { PostCommentPayload } from '../models/chat.model';

export class CommentController {
  private _commentRoute = '/api/comments';

  public async postComment(payload: PostCommentPayload) {
    const { data } = await axios({
      method: 'POST',
      url: `${this._commentRoute}/post`,
      headers: {},
      data: payload,
    });

    return data;
  }
}
