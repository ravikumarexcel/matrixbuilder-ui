import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullLayout from './components/layouts/Full.layout';
import Home from './components/containers/Home';
import Login from './components/containers/Login';
import Profile from './components/containers/Profile';
import NoPage from './components/containers/NoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
       

    </div>
  );
}

export default App;
