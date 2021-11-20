import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import i18next from './i18n'
import './assets/style/main.scss';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const loadingMarkup = (
  <div>
    <h3>Loading..</h3>
  </div>
)

const lang = localStorage.getItem('lang' || 'en')
axios.defaults.headers.common['Accept-Language'] = lang
i18next.changeLanguage(lang)


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
reportWebVitals();
