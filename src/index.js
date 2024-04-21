import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/main.css';
import {BrowserRouter} from 'react-router-dom';
// import image from "../src/assets/images/"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    
  </>
);


