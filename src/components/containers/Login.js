// Login.js
import React from 'react';
// import { Button } from 'react-bootstrap';
import './Login.css';
import logo from './../../logo.svg';

const Login = () => {
  return (
    <div>
      {/* <h1>Login Page</h1>
      <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button> */}


      <main class="form-signin w-100 m-auto">
        <form>
          <img class="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">© 2023–2028</p>
        </form>
      </main>


    </div>
  );
};

export default Login;
