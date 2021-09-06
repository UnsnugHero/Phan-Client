import axios from 'axios';

import { LoginPayload, LoginResponse } from '../models/login.model';
import { handleError } from '../util/helpers';

class AuthService {
  public _isAuthenticated = false;
  private readonly TOKEN_KEY = 'authtoken';

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set setAuthenticated(authorized: boolean) {
    this._isAuthenticated = authorized;
  }

  public async login(payload: LoginPayload): Promise<boolean> {
    try {
      const response: LoginResponse = (await axios.post('/api/auth/login', payload)).data;
      localStorage.setItem(this.TOKEN_KEY, response.accessToken);
      this._isAuthenticated = true;
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }

  public logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._isAuthenticated = false;
  }

  public storeAuthToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

export default new AuthService();
