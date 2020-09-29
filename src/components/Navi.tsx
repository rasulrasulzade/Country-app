import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Countries</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/add-country">Add Country</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navi;
