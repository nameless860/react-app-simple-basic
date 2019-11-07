import { requests } from '../constants'
import axios from '../config/axios'
import StringUtils from 'lodash/string'

StringUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g

export const PROJECT_ACTIONS = {
  RECEIVE_PROJECTS_SUCCESS: 'RECEIVE_PROJECTS_SUCCESS',
  CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
  EDIT_PROJECT_SUCCESS: 'EDIT_PROJECT_SUCCESS',
  DELETE_PROJECT_SUCCESS: 'DELETE_PROJECT_SUCCESS',
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

export const createProject = (project) => {
  return (dispatch) => {
    return axios.post(requests.CREATE_PROJECT, project)
    .then(res => {
      dispatch({
        type: PROJECT_ACTIONS.CREATE_PROJECT_SUCCESS,
        payload: res.data
      })
    })
  }
}

export const editProject = (project) => {
  return (dispatch) => {
    const url = StringUtils.template(requests.EDIT_PROJECT_URL)({id: project.id})

    return axios.put(url,project)
    .then(res => {
      dispatch({
        type: PROJECT_ACTIONS.EDIT_PROJECT_SUCCESS,
        payload: res.data,
      })
    })
    .catch()
  }
}

export const deleteProject = (project_id) => {
  return (dispatch) => {
    const url = StringUtils.template(requests.DELETE_PROJECT_URL)({id: project_id})

    return axios.delete(url)
    .then(res => {
      dispatch({
        type: PROJECT_ACTIONS.DELETE_PROJECT_SUCCESS,
        payload: project_id
      })
    })
  }
}

