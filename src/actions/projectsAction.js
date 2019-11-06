import { requests } from '../constants'
import axios from '../config/axios'

export const PROJECT_ACTIONS = {
  RECEIVE_PROJECTS_SUCCESS: 'RECEIVE_PROJECTS_SUCCESS',
}

export const fetchProjects = () => {
  return (dispatch) => {
    axios.get(requests.GET_PROJECTS)
    .then(res => {
      dispatch({
        type: PROJECT_ACTIONS.RECEIVE_PROJECTS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => { alert(err) })
  }
}

