import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book from './Book';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book name="Name1" year="2010" price={1000} />
    <Book name="Name2" year="2011" price={1500} />
    <Book name="Name3" year="2012" price={2000} />
    <Book name="" year="2013" price={2500} />
  </React.StrictMode>
);

