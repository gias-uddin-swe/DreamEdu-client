import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div>
      {/* <Navbar className="row" bg="dark" variant="dark"> */}
      <nav className="mr-auto row">
        <div className="col-md-2 col-sm-12 col-lg-2">
          <h1 className="text-center">
            {" "}
            <span
              style={{
                fontSize: "200%",
                color: "#ec1354",
                fontStyle: "italic",
              }}
            >
              D
            </span>
            ream
            <span
              style={{
                fontSize: "200%",
                color: "#ec1354",
                fontStyle: "italic",
              }}
            >
              E
            </span>
            du
          </h1>
        </div>
        <div className="col-md-10 col-lg-10 col-sm-12 menu-container text-center row  ">
          <div className="ml-auto row d-flex justify-content-center align-items-center">
            <li>
              <Link className="menu-items " to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-items " to="/home">
                Scholarships
              </Link>
            </li>
            <li>
              <Link className="menu-items" to="/dashboard">
                Admin
              </Link>
            </li>
            <li>
              <Link className="menu-items" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="menu-items" to="/login">
                Login
              </Link>
            </li>
          </div>
        </div>
      </nav>

      {/* <div className="col-md-10 col-sm-12">
          <Nav className="ml-auto">
            
            
            
            
            
          </Nav>
        </div> */}
      {/* </Navbar> */}
    </div>
  );
};

export default MenuBar;
