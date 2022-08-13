const queryStringify = (data: object) => {
  let query = '?';
  const keys = Object.keys(data);
  for (const key of keys) {
    const element = data[key] instanceof Array ? data[key].join(',') : data[key];
    query += `${key}=${element}&`;
  }

  return query === '?' ? '' : query.slice(0, -1);
};
export default queryStringify;
