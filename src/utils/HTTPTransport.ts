const METHODS = {
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
function queryStringify(data) {
// Можно делать трансформацию GET-параметров в отдельной функции
  let query = '?';
  const keys = Object.keys(data);
  for (const key of keys) {
    const element = data[key] instanceof Array ? data[key].join(',') : data[key];
    query += `${key}=${element}&`;
  }

  return query === '?' ? '' : query.slice(0, -1);
}

class HTTPTransport {
  get = (url, options = {}) => {
    const query = options.data ? queryStringify(options.data) : '';
    return this.request(url + query, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  // options:
  // headers — obj
  // data — obj
  request = (url, options, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
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
