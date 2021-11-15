import React, { useEffect, useState } from "react";
import API from "../API/api";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const styleSignup = {
  borderRadius: "30px",
  boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
};

function Signup() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios
      .post(
        API + "autth.php/login",
        {
          action: "login",
        },
        { withCredentials: true }
      )
      .then((res) => {
        setStatus(true);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    axios
      .post(API + "autth.php/register", {
        action: "register",
        role_id: "1",
        ...user,
      })
      .then((res) => {
        window.location.href = "/login";
      })
      .catch((res) => {
        alert(res);
      });
  };

  if (status) return <Redirect to="/admin" />;
  return (
    <div
      className="signup bg-light d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className=" bg-white container py-5 position-relative"
        style={styleSignup}
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
        <div className="signup-content row py-4 g-0 ps-5 pe-3">
          <div className="signup-form col-lg-6 ps-5 ">
            <h1 className="form-title mb-4">Đăng ký</h1>
            <form method="" className="register-form" id="signup-form">
              <div className="input-group mb-4 w-75">
                <label
                  htmlFor="fullname"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-person-fill"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Họ Tên"
                  required
                  value={user.name}
                  onChange={changeHandler}
                />
              </div>
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
                  placeholder="Email"
                  required
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
                  required
                  value={user.password}
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-4 w-75">
                <label
                  htmlFor="repeat-password"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <i className="bi bi-lock"></i>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="password"
                  name="repeat-password"
                  id="repeat-password"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>
              <div className="form-check ms-2 mt-2 mb-4">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="remember-me form-check-input"
                  required
                />
                <label
                  htmlFor="accept-term"
                  className="label-accept-term form-check-label"
                >
                  Tôi đồng ý với các điều khoản và dịch vụ
                </label>
              </div>
              <div
                type="submit"
                className="f btn btn-primary my-3 py-2 px-5"
                onClick={submitHandler}
              >
                Đăng ký
              </div>
            </form>
            <Link to="/login">Tôi đã có tài khoản!</Link>
          </div>

          <div className="signup-image col-lg-6">
            <figure>
              <img
                className="d-block mx-auto"
                src={process.env.PUBLIC_URL + "./img/signup-image.jpg"}
                alt="singupimage"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
