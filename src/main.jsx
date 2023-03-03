import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import store from './shared/store';
import { HashRouter } from "react-router-dom";

import './fonts/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename='/react-food-delivery'>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
