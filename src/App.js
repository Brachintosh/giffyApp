import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';
import { Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <h3>GiffyApp</h3>
        <a href='/gif/panda' >Giffs de Pandas</a>
        <a href='/gif/brasil' >Giffs de Brasil</a>
        <a href='/gif/argentina' >Giffs de Argentina</a>
        <a href='/gif/matrix' >Giffs de Matrix</a>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        {/* <ListOfGifs keyword='brasil' /> */}

      </section>
    </div>
  );
}

export default App;
