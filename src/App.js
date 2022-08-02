import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/navbar-dropdown">
        <MDBBtn className="m-3">
          Navbar dropdown
        </MDBBtn>
      </Link>
      <Link to="/navbar-dropdown-left">
        <MDBBtn className="m-3">
          Navbar dropdown left
        </MDBBtn>
      </Link>
      <Link to="/hover">
        <MDBBtn className="m-3">
          Nested dropdown on hover
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}