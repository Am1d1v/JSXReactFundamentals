import React from 'react';
import Book from './Book';
import Preloader from './Proloader';


const App = (props) => {
  
  return props.isLoading ? (<Preloader />) : (
    <div>
      <Book name="Name1" year="2010" price={1000} />
      <Book name="Name2" year="2011" price={1500} />
      <Book name="Name3" year="2012" price={2000} />
      <Book name="" year="2013" price={2500} />
    </div>
  )
};
  
    
  


export default App;
