import React from "react";
import { Link } from "react-router-dom";

function Header({ clickHandler, currPage, currUser }) {
  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              TheBell
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-between"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link
                  className={
                    currPage === "home" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/admin"
                >
                  <i className="bi bi-house me-1"></i>
                  Trang chủ
                </Link>
                <Link
                  to="/admin/category"
                  className={
                    currPage === "category" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="bi bi-folder me-2"></i>
                  Danh mục
                </Link>
                <Link
                  className={
                    currPage === "product" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/product"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Sản phẩm
                </Link>
                <Link
                  className={
                    currPage === "order" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/order"
                >
                  <i className="bi bi-minecart me-2"></i>
                  Đơn hàng
                </Link>

                <Link
                  className={
                    currPage === "user" ? "nav-link active" : "nav-link"
                  }
                  to="/admin/user"
                >
                  <i className="bi bi-people me-2"></i>
                  Người dùng
                </Link>
                <li className="nav-item dropdown">
                  <a
                    className={
                      currPage === "feedback" ||
                      currPage === "contact" ||
                      currPage === "news"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currPage === "feedback" ? (
                      <>
                        <i className="bi bi-question-circle me-2 "></i>
                        Phản hồi
                      </>
                    ) : currPage === "contact" ? (
                      <>
                        {" "}
                        <i className="bi bi-person-rolodex me-2"></i>
                        Thông tin liên hệ
                      </>
                    ) : currPage === "news" ? (
                      <>
                        <i className="bi bi-newspaper me-2"></i>
                        Tin tức
                      </>
                    ) : (
                      <>
                        <i className="bi bi-plus-circle me-2"></i>
                        Chức năng khác
                      </>
                    )}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className={
                          currPage === "feedback"
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                        to="/admin/feedback"
                      >
                        <i className="bi bi-question-circle me-2 "></i>
                        Phản hồi
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          currPage === "contact"
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                        to="/admin/contact"
                      >
                        <i className="bi bi-person-rolodex me-2"></i>
                        Thông tin liên hệ
                      </Link>
                    </li>
                    <Link
                      className={
                        currPage === "news"
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      to="/admin/news"
                    >
                      <i className="bi bi-newspaper me-2"></i>
                      Tin tức
                    </Link>
                  </ul>
                </li>
              </div>
              <div className="d-flex justify-content-between">
                <form className="d-flex">
                  <div className="input-group">
                    <input
                      className="form-control form-control-sm bg-light border-0 rounded-pill rounded-end shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="input-group-text bg-light border-0 rounded-pill rounded-start"
                      type="submit"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>

                <div className="d-flex ms-3">
                  <div>
                    <button className="btn btn-success rounded-circle">
                      <i className="bi bi-person-circle"></i>
                    </button>
                  </div>
                  <div className="text-light d-flex flex-column justify-content-center ms-1">
                    <span className="lh-1 fs-6 fst-italic fw-light">
                      Xin chào!
                    </span>
                    <span className="lh-1 fw-bold">{currUser.fullname}</span>
                  </div>
                </div>

                <button
                  className="btn btn-outline-warning ms-4"
                  onClick={clickHandler}
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
