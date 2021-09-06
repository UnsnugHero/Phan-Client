import axios from 'axios';

import AuthService from './auth.service';
import { CreateUserPayload, CreateUserResponse } from '../models/user.model';
import { handleError } from '../util/helpers';

class UserService {
  private _userRoute = '/api/user';

  public async createUser(payload: CreateUserPayload): Promise<any> {
    try {
      const response: CreateUserResponse = (await axios.post(`${this._userRoute}/create`, payload)).data;
      AuthService.storeAuthToken(response.accessToken);
      AuthService.setAuthenticated = true;
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }
}

export default new UserService();
