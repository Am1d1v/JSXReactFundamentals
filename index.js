import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const Book = (props) => {
  console.log(props);

  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.year),
    React.createElement('p', {}, props.price)
  ])
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book name="Name1" year="2010" price={1000} />
    <Book name="Name1" year="2010" price={1000} />
    <Book name="Name1" year="2010" price={1000} />
  </React.StrictMode>
);

