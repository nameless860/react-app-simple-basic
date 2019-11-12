import React, { Component } from 'react';
import {Provider} from 'react-redux'
import I18n from "redux-i18n"
import './App.css';
import Routes from './routes'
import {translations} from "./config/locales/root"
import combinedReducers from './reducers'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import { verifyCredentials } from './config/redux-token-auth'

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(combinedReducers,middleware);
verifyCredentials(store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18n translations={translations} initialLang="en" fallbackLang="zh">
          <Routes />
        </I18n>
      </Provider>
    )
  }
}

export default App;
