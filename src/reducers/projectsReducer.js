import { PROJECT_ACTIONS } from '../actions/projectsAction'

let initState = []

const projectsReducer = (state=initState,action) => {
  switch(action.type) {
    case PROJECT_ACTIONS.RECEIVE_PROJECTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default projectsReducer;