import axios from 'axios';

export interface LoginPayload {
  username: string;
  password: string;
}

class AuthService {
  public async login(payload: LoginPayload) {
    const { data } = await axios.post('api/auth/login', payload);
  }
}

export default new AuthService();
