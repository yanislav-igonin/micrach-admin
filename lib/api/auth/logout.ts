import axios from 'axios';
import { OkRespoonse } from './common';

export const logout = () => axios.post<OkRespoonse>('/api/auth/logout');
