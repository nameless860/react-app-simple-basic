import { PROJECT_ACTIONS } from '../actions/projectsAction'

let initState = []

const projectsReducer = (state=initState,action) => {
  switch(action.type) {
    case PROJECT_ACTIONS.RECEIVE_PROJECTS_SUCCESS:
      return action.payload;
    case PROJECT_ACTIONS.CREATE_PROJECT_SUCCESS:
      return state.push(action.payload);
    default:
      return state;
  }
}

export default projectsReducer;