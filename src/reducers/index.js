import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';

const combinedReducers = combineReducers({
  projects: projectsReducer
});

export default combinedReducers;