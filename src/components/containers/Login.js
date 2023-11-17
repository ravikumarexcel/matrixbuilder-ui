// Login.js
import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import './Login.css';
import logo from './../../logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log('Login ', { username, password });
    navigate('/profile');
  }

  return (
    <div>
      {/* <h1>Login Page</h1>
      <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button> */}


      <main className="form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" value={username} onChange={handleUsernameChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" value={password} onChange={handlePassword} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="button" onClick={handleLogin}>Sign in</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2023–2028</p>
        </form>
      </main>


    </div>
  );
};

export default Login;
