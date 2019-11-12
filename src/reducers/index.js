import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import flashesReducer from './flashesReducer'
import { i18nState } from "redux-i18n"
import { reduxTokenAuthReducer } from 'redux-token-auth'

const combinedReducers = combineReducers({
  i18nState: i18nState,
  projects: projectsReducer,
  flashes: flashesReducer,
  reduxTokenAuth: reduxTokenAuthReducer,
});

export default combinedReducers;