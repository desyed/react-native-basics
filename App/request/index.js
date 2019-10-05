import axios from 'axios';

const ax = axios.create({
  baseURL: 'https://api.imgur.com/3/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

const request = async (link, obj) => {
  ax({
    method: (obj && obj.method) || 'get',
    url: link,
    data: obj.data || {},
  }).then(response => response);
};
export default request;
