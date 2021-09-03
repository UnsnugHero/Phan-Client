import axios from 'axios';

import { LoginPayload, LoginResponse } from '../models/login.model';

class AuthService {
  private readonly TOKEN_KEY = 'authtoken';

  public async login(payload: LoginPayload): Promise<boolean> {
    try {
      const response: LoginResponse = await axios.post('/api/auth/login', payload);
      localStorage.setItem(this.TOKEN_KEY, response.data.accessToken);
      return true;
    } catch (error) {
      // show a message to user login auth failed
      return false;
    }
  }

  public getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

export default new AuthService();
