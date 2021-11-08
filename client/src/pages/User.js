import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import API from "../API/api";

const styleSignup = {
  borderRadius: "30px",
  boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
};

function User() {
  const [state, setState] = useState({
    isLoggedIn: false,
    isLoading: true,
    user: {},
  });

  const [user, setUser] = useState({
    id: "",
    fullname: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
    role_id: "",
  });

  useEffect(() => {
    console.log("axios");
    axios
      .post(
        API + `authentication.php`,
        {
          action: "login",
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === 1) {
          setState({ isLoggedIn: true, user: res.data.user });
          setUser({ ...res.data.user, password: "" });
        }
      });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

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
        if (res.data.status === 1) {
          setState({ isLoggedIn: false, user: {} });
        }
        // window.location.href = "/admin";
      });
  };

  const submitHandler = () => {
    axios
      .post(
        API + `authentication.php`,
        {
          action: "edit",
          ...user,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status !== 1) {
          alert(res.data.msg);
        } else {
          setState((prev) => ({ ...prev, user: user }));
          setUser((prev) => ({ ...prev, password: "" }));
          document.getElementById("new-password").value = "";
          document.getElementById("old-password").value = "";
        }
        // console.log(user, state.user);
      });
  };
  const closeHandler = (x) => {
    switch (x) {
      case "1":
        break;
      case "2":
        setUser(state.user);
        break;
      case "3":
        setUser((prev) => ({ ...prev, password: "" }));
        document.getElementById("new-password").value = "";
        document.getElementById("old-password").value = "";
        break;
    }
  };

  return state.isLoggedIn ? (
    <>
      <div
        className="signup bg-light d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className=" bg-white container py-3 position-relative"
          style={styleSignup}
        >
          <Link to="/">
            <button
              className="btn btn-primary position-absolute top-0 start-0 px-4 bg-gradient"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              <i className="bi bi-arrow-return-left"></i>
            </button>
          </Link>
          <button
            className="btn btn-warning position-absolute top-0 end-0 px-4 bg-gradient"
            style={{
              borderTopRightRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
            onClick={clickHandler}
          >
            <i className="bi bi-box-arrow-in-right"></i>
          </button>
          <div className="signup-content row py-0 g-0 ps-5 pe-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="card" style={{ borderRadius: "4px" }}>
                  <img
                    src="https://pdp.edu.vn/wp-content/uploads/2021/05/avatar-hinh-anh-dai-dien-nguoi-giau-mat.jpg"
                    className="card-img-top"
                    alt="avata"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <span className="fw-light">Xin chào</span>{" "}
                      {state.user.fullname}!
                    </h5>
                    <ul className="list-group list-group-flush border-0">
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-avata"
                      >
                        <i className="bi bi-person-bounding-box"></i> Thay đổi
                        ảnh đại diện
                      </li>
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-info"
                      >
                        <i className="bi bi-person-rolodex"></i> Thay đổi thông
                        tin cá nhân
                      </li>
                      <li
                        className="list-group-item list-group-item-action px-lg-2 px-0"
                        role="button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#change-password"
                      >
                        <i className="bi bi-file-lock"></i> Thay đổi mật khẩu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <table className="table table-responsive pt-0">
                  <thead>
                    <tr>
                      <td className="p-0 h-0" style={{ width: "160px" }}></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Họ và Tên</td>
                      <td>:</td>
                      <td>{state.user.fullname}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{state.user.email}</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại</td>
                      <td>:</td>
                      <td>{state.user.phone_number}</td>
                    </tr>
                    <tr>
                      <td>Địa chỉ</td>
                      <td>:</td>
                      <td>{state.user.address}</td>
                    </tr>
                  </tbody>
                </table>
                <figure>
                  <img
                    className="d-block mx-auto"
                    src={process.env.PUBLIC_URL + "./img/signup-image.jpg"}
                    alt="sing up image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-avata"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thay đổi ảnh đại diện
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("1")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="avata" className="form-label mb-0 mt-2">
                Ảnh đại diện
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Link hình ảnh"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("1")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-info"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thay đổi thông tin cá nhân
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("2")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="fullname" className="form-label mb-0 mt-2 ">
                Họ và Tên
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Họ và Tên"
                name="fullname"
                value={user.fullname}
                onChange={changeHandler}
              />
              <label htmlFor="email" className="form-label mb-0 mt-2">
                Email
              </label>
              <input
                type="email"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={changeHandler}
              />
              <label htmlFor="phone_number" className="form-label mb-0 mt-2">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Số điện thoại"
                name="phone_number"
                value={user.phone_number}
                onChange={changeHandler}
              />
              <label htmlFor="address" className="form-label mb-0 mt-2">
                Địa chỉ
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Địa chỉ"
                name="address"
                value={user.address}
                onChange={changeHandler}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("2")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={submitHandler}
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="change-password"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thay đổi mật khẩu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeHandler("3")}
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="old_password" className="form-label mb-0 mt-2">
                Mật khẩu cũ
              </label>
              <input
                type="password"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Mật khẩu cũ"
                id="old-password"
              />
              <label htmlFor="new_password" className="form-label mb-0 mt-2">
                Mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                placeholder="Mật khẩu mới"
                id="new-password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeHandler("3")}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={submitHandler}
              >
                Hoàn thành
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : state.isLoading ? (
    "Loading..."
  ) : (
    <Redirect to="/" />
  );
}
export default User;