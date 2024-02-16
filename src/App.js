import './App.css';
import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
