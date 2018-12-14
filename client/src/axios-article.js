import axios from 'axios';

axios.defaults.baseURL = 'http://demoapi.tmn2njb5pr.ap-southeast-1.elasticbeanstalk.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios