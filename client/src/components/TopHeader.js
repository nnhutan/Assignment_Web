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
  const [contacts, setContacts] = useState([]);
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
      axios
        .post(API + `contact-public.php`, {
          action: "list",
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 1) setContacts(res.data.contactList);
        });
    }
    authen();
  }, []);
  return (
    <div className="bg-white">
      <div
        className="container d-flex justify-content-sm-between justify-content-end align-items-center px-4 py-1"
        style={{ fontSize: "14px" }}
      >
        <div
          className="d-md-flex d-none text-uppercase text-secondary"
          style={{ fontSize: "14px" }}
        >
          <p className="my-0 me-3">
            <i className="bi bi-telephone-fill"></i>{" "}
            {contacts.length !== 0 &&
              contacts[0].type + ": " + contacts[0].content}
          </p>
          <p className="my-0">
            <i className="bi bi-envelope-fill"></i>{" "}
            {contacts.length !== 0 &&
              contacts[1].type + ": " + contacts[1].content}
          </p>
        </div>
        <div className="d-flex align-items-center">
          {!state.isLoggedIn ? (
            <>
              {" "}
              <Link
                to="/login"
                className="me-3 text-secondary text-decoration-none"
              >
                <i className="bi bi-person-fill"></i> Login
              </Link>
              <Link
                className="text-secondary text-decoration-none"
                to="/signup"
              >
                <i className="bi bi-person-plus-fill"></i> Sign Up
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div className=" d-md-flex flex-column justify-content-center me-1">
                <span className="lh-1 fs-6 fst-italic fw-light me-md-0 me-2">
                  Xin chào!
                </span>
                <span className="lh-1 fw-bold">{state.user.fullname}</span>
              </div>
              <div className="btn-group">
                <button
                  className="btn btn-success rounded-circle"
                  // style={{ padding: "1px 10px", lineHeight: "0.5" }}
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <button
                  type="button"
                  className="  btn btn-white dropdown-toggle dropdown-toggle-split rounded-circle shadow-none"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {state.user !== {} && state.user.role_id === "1" ? (
                    <li>
                      <Link className="dropdown-item" to="/admin">
                        <i className="bi bi-person-badge"></i> Trang quản trị
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link className="dropdown-item" to="/user">
                      <i className="bi bi-gear-fill"></i> Thay đổi thông tin cá
                      nhân
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span
                      role="button"
                      className="dropdown-item"
                      onClick={clickHandler}
                    >
                      <i className="bi bi-box-arrow-left me-2"></i>
                      Đăng xuất
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
