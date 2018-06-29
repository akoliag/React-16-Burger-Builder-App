import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c771a.firebaseio.com/'
});

export default instance;
