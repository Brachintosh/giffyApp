import React, { useState, } from 'react';
import './App.css';

const apiKey = '0vXAlCjt4QqgQXLO2l81XTQbZ6XX4vFA';
const GIFFS = [
  'https://media3.giphy.com/media/EatwJZRUIv41G/giphy.webp?cid=ecf05e475f13vhm4ea8aj6x3ag1cesurbfll40kvd0rp7kp2&rid=giphy.webp&ct=g',
  'https://media3.giphy.com/media/l3V0lsGtTMSB5YNgc/200w.webp?cid=ecf05e475f13vhm4ea8aj6x3ag1cesurbfll40kvd0rp7kp2&rid=200w.webp&ct=g',
  'https://media0.giphy.com/media/TObbUke0z8Mo/200.webp?cid=ecf05e475f13vhm4ea8aj6x3ag1cesurbfll40kvd0rp7kp2&rid=200.webp&ct=g',
]

function App() {
const [gifs, setGifs] = useState(GIFFS);

  return (
    <div className="App">
      <section className='App-content'>
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
