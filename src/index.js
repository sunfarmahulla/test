import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

serviceWorker.unregister();