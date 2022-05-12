import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';
import { Route, Link } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/'>
          <h3 className='app-title' >GiffyApp</h3>
        </Link>
        <Link to='/gif/panda' >Giffs de Pandas</Link>
        <Link to='/gif/brasil' >Giffs de Brasil</Link>
        <Link to='/gif/argentina' >Giffs de Argentina</Link>
        <Link to='/gif/matrix' >Giffs de Matrix</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
