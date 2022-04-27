import axios from 'axios';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    username: string;
  }
}

export const login = (data: LoginRequest) => 
  axios.post<LoginResponse>('/api/auth/signin/credentials', data);
