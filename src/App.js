import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import TitleLogo from './assets/screenshot1.png';
import FooterBrand from './components/FooterBrand';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/'>
          <div>
            <img alt="GiffyLogo" className='App-logo' src={TitleLogo} />
            <h3 className='app-title' >GiffyApp</h3>
          </div>
        </Link>

        <Route component={Home} path='/' />
        <Route component={Detail} path='/gif/:id' />
        <Route component={SearchResults} path='/search/:keyword' />
        <ScrollToTop hidden showBelow={150}/>
      </section>

      <FooterBrand />
    </div>
  );
}

export default App;
