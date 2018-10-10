import axios from './axios';
import qs from 'qs';

/**
 * Send GET request to project API
 * @param  {String} url       Relative path
 * @param  {Object} data      JSON data converts to URI: ?key=value&foo=bar
 * @param  {Object} options   Config for requester
 * @return {Promise}          Thenable/Catcheable
 */
function _get(ax) {
  return function(url, data = {}, options = {}) {
    return ax.get(url, { params: data, ...options });
  };
}

/**
 * Send POST request to inside of project
 * @param  {String} url       Relative path
 * @param  {Object} data      JSON data
 * @param  {Object} options   Config for requester
 * @return {Promise}          Thenable/Catcheable
 */
function _post(ax) {
  return function (url, data = {}, options = {}) {
    return ax.post(url, data, options);
  };
}

/**
 * Send PUT request to inside of project
 * @param  {String} url       Relative path
 * @param  {Object} data      JSON data
 * @param  {Object} options   Config for requester
 * @return {Promise}          Thenable/Catcheable
 */
export function _put(ax) {
  return function (url, data = {}, options = {}) {
    return ax.put(url, data, options);
  };
}

/**
 * Send PATCH request to inside of project
 * @param  {String} url       Relative path
 * @param  {Object} data      JSON data
 * @param  {Object} options   Config for requester
 * @return {Promise}          Thenable/Catcheable
 */
export function _patch(ax) {
  return function (url, data = {}, options = {}) {
    return ax.patch(url, data, options);
  };
}

/**
 * Send DELETE request to inside of project
 * @param  {String} url       Relative path
 * @param  {Object} data      JSON data
 * @param  {Object} options   Config for requester
 * @return {Promise}          Thenable/Catcheable
 */
export function _destroy(ax) {
  return function (url, data = null) {
    if (data) {
      url += url.includes('?') ? '&' : '?';
      url += qs.stringify(data, { arrayFormat: 'brackets' });
    }
    return ax.delete(url);
  };
}

export const get = _get(axios);
export const post = _post(axios);
export const put = _put(axios);
export const patch = _patch(axios);
export const destroy = _destroy(axios);
