import axios from 'axios';

class UserService {
  userRoute = '/api/user';

  async createUser(payload) {
    const response = (await axios.post(`${this._userRoute}/create`, payload)).data;
    // AuthService.storeAuthToken(response.accessToken);
  }
}

export default new UserService();
