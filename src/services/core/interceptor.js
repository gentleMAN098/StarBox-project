// import axios from 'axios';

// axios.interceptors.request.use(
//   (config) => {
//     config.baseURL = process.env.BASE_URL || 'http://localhost:3001';
//     config.withCredentials = true;
//     return config;
//   },
//   (err) => {}
// );

// axios.interceptors.response.use(
//   (response) => {
//     const { data } = response;
//     return data;
//   },
//   (error) => {
//     console.log('error json-server', error.response);

//     return Promise.reject(error);
//   }
// );
// let jsonServerInstance = axios.create({
//   baseURL: 'http://localhost:3001',
//   withCredentials: true,
// });

// jsonServerInstance.interceptors.response.use(
//   (response) => {
//     const { data } = response;
//     return data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const HttpChemi = {
//   get: jsonServerInstance.get,
//   post: jsonServerInstance.post,
// };
// const Http = {
//   get: axios.get,
//   post: axios.post,
// };

// export default Http;

export async function getRequest() {
  let res = await axios.get('http://localhost:3001/products');

  let data = res.data;
  console.log(data);
}
getRequest();
