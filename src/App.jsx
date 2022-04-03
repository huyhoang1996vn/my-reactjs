import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Home from './Home'
import CounterForm from './CounterRedux'
import ContactForm from './Contact'
import ContactRedux from './ContactRedux'


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
        <Route exact path="/redux" element={<CounterForm />}/>
        <Route exact path="/contact" element={<ContactForm />}/>
        <Route exact path="/contact-redux" element={<ContactRedux />}/>

      </Routes>
    </>
  );
}

export default App;
