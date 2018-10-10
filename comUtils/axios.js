import Axios from 'axios';
import { isPlainObject } from 'lodash/lang';
import qs from 'qs'
import { BASE_URL } from '../config'
// import { camelizeKeys, snakeizeKeys } from './transforms';

const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  withCredentials: true,
  responseType: 'json',
  transformRequest(data) {
    if (isPlainObject(data)) data = qs.stringify(data);
    return data;
  },
  // transformResponse(data) {
  //   // data comes as string in IE
  //   if (typeof data === 'string' && data.length) data = JSON.parse(data);
  //   return data;
  // }
});

export default axios;
