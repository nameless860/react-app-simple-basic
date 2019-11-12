import axios from 'axios';
import {HeaderService} from '../services/auth_service'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
// axios.defaults.headers.common["api_key"] = process.env.REACT_APP_API_KEY
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

const service = new HeaderService()

axios.interceptors.request.use(config => {
  service.setAuthHeaders(config)
  return config
})

axios.interceptors.response.use(response => {
  service.persistAuthHeadersInLocalStorage(response.headers)
  return response
})

window.axios = axios

export default axios