import axios from 'axios';
import { OkRespoonse } from './common/responses/ok.response';

export const logout = () => axios.post<OkRespoonse>('/api/auth/logout');
