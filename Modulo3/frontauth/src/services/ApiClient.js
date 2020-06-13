import axios from 'axios';

class ApiClient {

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    })
  }

  login(body) {
    return this.apiClient.post('/users/login', body);
  }

}

const apiClient = new ApiClient();
export default apiClient;