import axios from 'axios';
import { toast } from 'react-toastify';
import { PhanError } from '../models/general.model';

import { LoginPayload, LoginResponse } from '../models/login.model';
import { handleError } from '../util/helpers';

class AuthService {
  private readonly TOKEN_KEY = 'authtoken';

  public async login(payload: LoginPayload): Promise<boolean> {
    try {
      const response: LoginResponse = await axios.post('/api/auth/login', payload);
      localStorage.setItem(this.TOKEN_KEY, response.data.accessToken);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }

  public getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

export default new AuthService();
