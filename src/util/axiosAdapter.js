import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? 'https://p5phansite.com' : 'localhost:5000';

const axiosLiveInstance = axios.create({ baseUrl });

export default axiosLiveInstance;
