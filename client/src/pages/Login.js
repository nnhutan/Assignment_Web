import React, { useState, useEffect } from "react";
import API from "../API/api";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const styleLogin = {
  borderRadius: "30px",
  boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
};

function Login() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios
      .post(
        API + `authentication.php`,
        {
          action: "login",
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 1) setStatus(true);
        // window.location.href = "/admin";
      });
  }, []);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        API + `authentication.php`,
        {
          action: "login",
          ...user,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 1) setStatus(true);
        // window.location.href = "/admin";
        else alert(res.data.msg);
      });
  };
  if (status) return <Redirect to="/admin" />;
  return (
    <div
      className="login bg-light d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className=" bg-white container py-5 position-relative"
        style={styleLogin}
      >
        <Link to="/">
          <button
            className="btn btn-light position-absolute top-0 start-0 px-4 bg-gradient"
            style={{
              borderTopLeftRadius: "32px",
              borderBottomRightRadius: "32px",
            }}
          >
            <i className="bi bi-arrow-return-left"></i>
          </button>
        </Link>
        <div className="login-content row py-5 g-0">
          <div className="login-image col-lg-6">
            <figure>
              <img
                className="d-block mx-auto"
                src={process.env.PUBLIC_URL + "./img/signin-image.jpg"}
                alt="sing up image"
              />
            </figure>
          </div>

          <div className="login-form col-lg-6">
            <h1 className="form-title mb-4">Đăng nhập</h1>
            <form method="" className="register-form" id="login-form">
              <div className="input-group mb-4 w-75">
                <label
                  htmlFor="email"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-envelope-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Nhập email"
                  value={user.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-4 w-75">
                <label
                  htmlFor="password"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-lock-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                  value={user.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-check ms-2 mt-2 mb-4">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="remember-me form-check-input"
                />
                <label
                  htmlFor="remember-me"
                  className="label-remember-me form-check-label"
                >
                  Nhớ thông tin đăng nhập
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary my-3 py-2 px-5"
                onClick={submitHandler}
              >
                Đăng nhập
              </button>
            </form>
            <Link to="/signup">Đăng ký thành viên!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
