import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../API/api";
import Header from "../../components/admin/Header";
import TableUser from "../../components/admin/TableUser";
import Pagination from "../../components/Pagination";

function User({ clickHandler, currUser }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [roles, setRoles] = useState([]);
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [user, setUser] = useState({
    fullname: "",
    role_id: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .post(
        //API + "authentication.php",
        API +'autth.php/userList',
        { action: "list" },
        { withCredentials: true }
      )
      .then((response) => {
        //if (response.data.status === 1) 
        setUsers(response.data);
        //else alert(response.data.msg);
      }).catch(res => {
        alert(res)
      })
  };

  useEffect(() => {
    getData();
    axios
      .post(
        //API + "authentication.php",
        API+'autth.php/getRole',
        { action: "role" },
        { withCredentials: true }
      )
      .then((response) => {
        //if (response.data.status === 1) 
        setRoles(response.data);
      }).catch(res => {
        alert(res)
      });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const closeHandler = () => {
    setUser({
      fullname: "",
      role_id: "",
      email: "",
      phone_number: "",
      address: "",
      password: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      axios
        .post(
          API + "authentication.php",
          { action: "add", ...user },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.status !== 1) alert(response.data.msg);
          else getData();
          setUser({
            fullname: "",
            role_id: "",
            email: "",
            phone_number: "",
            address: "",
            password: "",
          });
        });
    } else {
      axios
        .post(
          //API + "authentication.php",
          API +'autth.php/editUser',
          {
            action: "edit",
            id: status.id,
            ...user,
          },
          { withCredentials: true }
        )
        .then((response) => {
          //if (response.data.status !== 1) alert(response.data.msg);
          //else {
            setUsers((prev) => {
              const idx = prev.findIndex((item) => item.id === status.id);
              prev[idx] = { ...prev[idx], ...user };
              return prev;
            });
          //}
          setUser({
            fullname: "",
            role_id: "",
            email: "",
            phone_number: "",
            address: "",
            password: "",
          });
          setStatus({
            id: "",
            action: "Thêm",
          });
        }).catch(res => {
          alert(res)
        });
    }
  };

  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá thành viên này không?"
    );
    if (option) {
      axios
        .post(
          //API + "authentication.php",
          API+'autth.php/deleteUser',
          { action: "delete", id: id },
          { withCredentials: true }
        )
        .then((response) => {
          //if (response.data.status === 2) alert(response.data.msg);
          //else
          setUsers((prev) => prev.filter((item) => item.id !== id));
        }).catch(res => {
          alert(res)
        });
    }
  };

  const editHandler = (id, user) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setUser({ ...user, password: "" });
    document.querySelector(".openmodal").click();
  };

  const itemPerPage = 5;
  const numberPage = Math.ceil(users.length / itemPerPage);
  const currUsers = users.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <Header clickHandler={clickHandler} currPage="user" currUser={currUser} />
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý thành viên</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm thành viên
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
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
                    {status.action} thành viên
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="fullname" className="form-label">
                    Họ và Tên
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Họ Tên"
                    name="fullname"
                    value={user.fullname}
                    onChange={changeHandler}
                  />
                  <label htmlFor="name" className="form-label">
                    Quyền
                  </label>
                  <select
                    name="role_id"
                    id="role_id"
                    className="form-control"
                    onChange={(e) => {
                      changeHandler(e);
                      setUser((prev) => ({
                        ...prev,
                        role_name: roles.find(
                          (item) => item.id === e.target.value
                        ).name,
                      }));
                    }}
                    value={user.role_id}
                  >
                    <option value="">-- Chọn --</option>
                    {roles.map((role) => (
                      <option value={role.id} key={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="phone_number" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    name="phone_number"
                    value={user.phone_number}
                    onChange={changeHandler}
                  />

                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                    name="address"
                    value={user.address}
                    onChange={changeHandler}
                  />

                  <label className="form-label" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    value={user.password}
                    onChange={changeHandler}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
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
          <TableUser
            users={currUsers}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            currUser={currUser}
            offset={(currentPage - 1) * itemPerPage}
          />
          {numberPage > 1 ? (
            <Pagination
              numberPage={numberPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default User;
