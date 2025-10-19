import './App.css';
import Game from './components/Game'
import Home from './Home'
import CounterForm from './components/CounterRedux'
import ContactForm from './components/Contact'
import ContactRedux from './components/ContactRedux'
import CounterReduxHook from './components/ContactReduxHook'
import FormUseEffect from './components/FormUseEffect'
import GetExpressData from './components/GetExpressData'



import {
  Routes,
  Route,
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
        <Route exact path="/contact-redux-hook" element={<CounterReduxHook />}/>
        <Route exact path="/useEffect" element={<FormUseEffect />}/>
        <Route exact path="/get-express" element={<GetExpressData />}/>
      </Routes>
    </>
  );
}

export default App;
