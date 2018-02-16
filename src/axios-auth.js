import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-http-23956.firebaseio.com'
});

instance.defaults.headers.common['IN_AXIOUS_AUTH'] = 'something';

export default instance;
