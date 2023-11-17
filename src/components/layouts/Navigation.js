// Example Navigation component with react-bootstrap
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem('token');

    navigate('/auth/login');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Matrix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>
            <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/auth/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="mr-auto">
           
          <Button  variant="primary" onClick={handleLogout}>
            Logout
          </Button>
           
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
