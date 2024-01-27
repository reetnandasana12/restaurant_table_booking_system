import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import store from './pages/redux/store';
import {Provider} from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
>>>>>>> parent of 2f42f45 (Delete client directory)
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
  </Provider>
  
=======
>>>>>>> parent of 2f42f45 (Delete client directory)
);

