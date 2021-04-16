import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DreamEdu</Navbar.Brand>
        <Nav className="ml-auto">
          <Link className="menu-items" to="/home">
            Home
          </Link>
          <Link className="menu-items" to="/admin">
            Admin
          </Link>
          <Link className="menu-items" to="/dashboard">
            Dashboard
          </Link>
          <Link  className="menu-items" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MenuBar;
