// Login.js
import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Your login page content */}
      <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
    </div>
  );
};

export default Login;
