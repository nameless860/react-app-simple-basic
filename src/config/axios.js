import axios from 'axios';

window.axios = axios
window.axios.defaults.baseURL = process.env.REACT_APP_API_URL
window.axios.defaults.headers.common["api_key"] = process.env.REACT_APP_API_KEY
window.axios.defaults.headers.common["Accept"] = "application/json"
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

export default axios