/* eslint-disable no-unused-vars */
import queryStringify from "./queryStringify";

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

class HTTPTransport {
  get = (url: string, options = {}) => {
    const query = options.data ? queryStringify(options.data) : '';
    return this.request(url + query, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options = {}) => {
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options = {}) => {
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options = {}) => {
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  // options:
  // headers — obj
  // data — obj
  request = (url, options, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
