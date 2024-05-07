import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import logoJpg from './assets/logo.jpeg';
import './App.css';
import About from './views/About';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="micro-react-app">
      <img src={logoJpg} alt="logo" width={300} />
      {/* <img src={logo} className="micro-react-logo" alt="logo" /> */}
      <p>
        <Link to="/">首页</Link>
      </p>
      <p>
        <Link to="/about">关于我们</Link>
      </p>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      {/* <header className="micro-react-header">
        <img src={logo} className="micro-react-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="micro-react-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
