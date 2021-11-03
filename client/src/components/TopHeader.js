import React from "react";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="bg-white">
      <div className="container d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex">
          <p className="my-0 me-2">PHONE: +01 234 5678 </p>
          <p className="my-0">EMAIL: thebell@example.com</p>
        </div>
        <div className="d-flex">
          <Link to="/login" className="me-2">
            Login
          </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
