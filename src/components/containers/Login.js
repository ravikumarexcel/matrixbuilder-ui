// Login.js
import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

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

            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                  <h3 class="mb-3">Login</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class=" pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form action="" class="row g-4">
                                            <div class="col-12">
                                                <label>Username<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Username" />
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Password" />
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <a href="#" class="float-end text-primary">Forgot Password?</a>
                                            </div>

                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary px-4 float-end mt-4">login</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100 bg-primary text-white text-center pt-5">
                                    <i class="bi bi-bootstrap"></i>
                                    <h2 class="fs-1">Welcome Back!!!</h2>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        

 
    </div>
  );
};

export default Login;
