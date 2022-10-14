import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Navigation from './components/Navigation';
import Dinner from './components/Dinner';
import Header from './components/Header';
import Lunch from './components/lunch';
import Footer from './components/Footer';
import './app.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
<Footer/>

  </React.StrictMode>
);


// <Header/>
