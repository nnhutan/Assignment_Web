import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../API/api";
import Header from "../../components/admin/Header";
import TableCategory from "../../components/admin/TableCategory";
import Pagination from "../../components/Pagination";

function Category({ clickHandler, currUser }) {
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [category, setCategory] = useState({ name: "" });
  const [categories, setCategories] = useState([]);

  const getData = () => {
    axios.post(
      //API + "category.php",
      API +'cate.php/listCategory',
      { action: "list" }
    ).then((response) => {
      //if (response.data.status === 1)
        setCategories(response.data);
      //else alert(response.data.msg);
    }).catch(res => {
      alert(res)
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const closeHandler = () => {
    setCategory({ name: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      axios
        .post(
          //API + "category.php",
          API +'cate.php/addCategory',
          { action: "add", ...category })
        .then((response) => {
          //if (response.data.status === 2) alert(response.data.msg);
          getData();
          setCategory({ name: "" });
        }).catch(res => {
          alert(res)
        });
    } else {
      axios
        .post(
          //API + "category.php",
          API +'cate.php/editCategory',
          {
          action: "edit",
          id: status.id,
          ...category,
        })
        .then((response) => {
          //if (response.data.status === 2) alert(response.data.msg);
          //else {
            setCategories((prev) => {
              prev[prev.findIndex((item) => item.id === status.id)].name =
                category.name;
              return prev;
            });
          //}
          setCategory({ name: "" });
          setStatus({
            id: "",
            action: "Thêm",
          });
          alert(response)
        }).catch(res => {
          alert(res)
        });
    }
  };

  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá danh mục này không?"
    );
    if (option) {
      axios
        .post(
          //API + "category.php",
          API +'cate.php/deleteCategory',
          { action: "delete", id: id })
        .then((response) => {
          //if (response.data.status === 2) alert(response.data.msg);
          //else 
          setCategories((prev) => prev.filter((item) => item.id !== id));
        }).catch(res => {
          alert(res)
        });
    }
  };

  const editHandler = (id, name) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setCategory({ name: name });
    document.querySelector(".openmodal").click();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 2;
  const numberPage = Math.ceil(categories.length / itemPerPage);
  const currCategories = categories.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <Header
        clickHandler={clickHandler}
        currPage="category"
        currUser={currUser}
      />
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý danh mục sản phẩm</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm danh mục sản phẩm mới
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
                    {status.action} danh mục sản phẩm
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
                  <label htmlFor="name" className="form-label">
                    Nhập tên danh mục
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên danh mục sản phẩm"
                    name="name"
                    value={category.name}
                    onChange={(e) =>
                      setCategory((prev) => ({ ...prev, name: e.target.value }))
                    }
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
                    className={
                      category.name === ""
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TableCategory
            categories={currCategories}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
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

export default Category;
