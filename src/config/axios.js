import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common["api_key"] = process.env.REACT_APP_API_KEY
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

window.axios = axios

export default axios