import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Blog from './components/Blog';
import Home from './components/Home';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
