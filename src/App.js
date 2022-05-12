import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';

const apiKey = '0vXAlCjt4QqgQXLO2l81XTQbZ6XX4vFA';

function App() {

  return (
    <div className="App">
      <section className='App-content'>

        <ListOfGifs keyword='brasil' />

      </section>
    </div>
  );
}

export default App;
