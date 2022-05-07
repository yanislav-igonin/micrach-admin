import axios from 'axios';
import { OkRespoonse } from '@responses';

export const logout = () => axios.post<OkRespoonse>('/api/auth/logout');
