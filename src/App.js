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
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext';

function App() {

  return (
    <StaticContext.Provider value={
      {
        nombre: 'brachintosh',
        suscribeteAlCanal: true,
        edad: 31,
      }
    }>
    <div className="App">
      <section className='App-content'>
        <Link to='/'>
          <div>
            <img alt="GiffyLogo" className='App-logo' src={TitleLogo} />
            <h3 className='app-title' >GiffyApp</h3>
          </div>
        </Link>

        <GifsContextProvider>
          <Route component={Home} path='/' />
          <Route component={Detail} path='/gif/:id' />
          <Route component={SearchResults} path='/search/:keyword' />
        </GifsContextProvider>

        <ScrollToTop hidden showBelow={150}/>
      </section>

      <FooterBrand />
    </div>
    </StaticContext.Provider>
  );
}

export default App;
