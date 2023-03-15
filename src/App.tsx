import {Routes, Route} from 'react-router-dom'

import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
