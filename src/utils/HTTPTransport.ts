/* eslint-disable no-unused-vars */
class HTTPTransport {
  METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };
 
  /**
* Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
* На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
* На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
*/
  queryStringify(data: object) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    let query = '?';
    const keys = Object.keys(data);
    for (const key of keys) {
      const element = data[key] instanceof Array ? data[key].join(',') : data[key];
      query += `${key}=${element}&`;
    }

    return query === '?' ? '' : query.slice(0, -1);
  }

  get = (url: string, options = {}) => {
    const query = options.data ? this.queryStringify(options.data) : '';
    return this.request(url + query, { ...options, method: this.METHODS.GET }, options.timeout);
  };

  put = (url: string, options = {}) => {
    this.request(url, { ...options, method: this.METHODS.PUT }, options.timeout);
  };

  post = (url: string, options = {}) => {
    this.request(url, { ...options, method: this.METHODS.POST }, options.timeout);
  };

  delete = (url: string, options = {}) => {
    this.request(url, { ...options, method: this.METHODS.DELETE }, options.timeout);
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

      if (method === this.METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
