import axios from 'axios';

export interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    username: string;
  }
}

export const login = (data: LoginRequest) => axios.post<LoginResponse>('/api/auth/login', data);
