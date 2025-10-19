import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Menu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
            className="App-link"
            href="/game"
            rel="noopener noreferrer"
        >
            Game
        </a>
        <a
            className="App-link"
            href="/redux"
            rel="noopener noreferrer"
        >
            Redux counter
        </a>
        <a
            className="App-link"
            href="/contact"
            rel="noopener noreferrer"
        >
            Contact
        </a>
        <a
            className="App-link"
            href="/contact-redux"
            rel="noopener noreferrer"
        >
            Contact in Redux
        </a>
        <a
            className="App-link"
            href="/contact-redux-hook"
            rel="noopener noreferrer"
        >
            Contact in Redux Hook
        </a>
        <a
            className="App-link"
            href="/useEffect"
            rel="noopener noreferrer"
        >
            UseEffect
        </a>
        <a
            className="App-link"
            href="/get-express"
            rel="noopener noreferrer"
        >
            Get Express Data
        </a>
      </header>
    </div>
  )
}

export default Home;