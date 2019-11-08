import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import flashesReducer from './flashesReducer'

const combinedReducers = combineReducers({
  projects: projectsReducer,
  flashes: flashesReducer,
});

export default combinedReducers;