import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div>
      <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
        <div ClassName="container-fluid">
          <Link ClassName="navbar-brand" to="/">
            Navbar
          </Link>
          <div ClassName="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex">
              <Link to="/registration" className="">
                Registration
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
