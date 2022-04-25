import './App.css';
import Game from './components/Game'
import Home from './Home'
import CounterForm from './components/CounterRedux'
import ContactForm from './components/Contact'
import ContactRedux from './components/ContactRedux'
import CounterReduxHook from './components/ContactReduxHook'
import {Routes,Route,} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';


Amplify.configure(awsExports);
// https://docs.amplify.aws/start/getting-started/setup/q/integration/react/#install-amplify-libraries

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Routes>
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/redux" element={<CounterForm />}/>
        <Route exact path="/contact" element={<ContactForm />}/>
        <Route exact path="/contact-redux" element={<ContactRedux />}/>
        <Route exact path="/contact-redux-hook" element={<CounterReduxHook />}/>
      </Routes>
    </>
  );
}

export default withAuthenticator(App);

// export default App;
