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

export const login = (data: LoginRequest) => {
  const formdata = new FormData();
  formdata.append('username', data.username);
  formdata.append('password', data.password);
  axios.post<LoginResponse>('/api/auth/callback/credentials', formdata);
};
