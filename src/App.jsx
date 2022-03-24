import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Home from './Home'

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
