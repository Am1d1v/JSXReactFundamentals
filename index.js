import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const Book = (props) => {
  console.log(props);

  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book name="Name1" year="2010" price={1000} />
    <Book name="Name2" year="2011" price={1500} />
    <Book name="Name3" year="2012" price={2000} />
  </React.StrictMode>
);

