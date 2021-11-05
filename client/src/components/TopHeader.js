import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../API/api";

function TopHeader() {
  const clickHandler = () => {
    axios
      .post(
        API + `authentication.php`,
        {
          action: "logout",
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 1) setState({ isLoggedIn: false, user: {} });
        // window.location.href = "/admin";
      });
  };
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });
  useEffect(() => {
    async function authen() {
      axios
        .post(
          API + `authentication.php`,
          {
            action: "login",
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.status === 1)
            setState({ isLoggedIn: true, user: res.data.user });
        });
    }
    authen();
  }, []);
  return (
    <div className="bg-white">
      <div className="container d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex">
          <p className="my-0 me-2">PHONE: +01 234 5678 </p>
          <p className="my-0">EMAIL: thebell@example.com</p>
        </div>
        <div className="d-flex">
          {!state.isLoggedIn ? (
            <>
              {" "}
              <Link to="/login" className="me-2">
                Login
              </Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              {" "}
              <div>
                <button className="btn btn-success rounded-circle">
                  <i class="bi bi-person-circle"></i>
                </button>
              </div>
              <div className=" d-flex flex-column justify-content-center ms-1">
                <span className="lh-1 fs-6 fst-italic fw-light">Xin chào!</span>
                <span className="lh-1 fw-bold">{state.user.fullname}</span>
              </div>
              <button
                className="btn btn-outline-primary ms-4"
                onClick={clickHandler}
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
