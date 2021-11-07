import React from "react";
import { Link } from "react-router-dom";

function Header({ currPage }) {
  return (
    <div className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  to="/"
                >
                  Trang chủ
                </Link>
                <Link
                  to="/intro"
                  className={
                    currPage === "intro" ? "nav-link active" : "nav-link"
                  }
                >
                  Giới thiệu
                </Link>
                <Link
                  className={
                    currPage === "product" ? "nav-link active" : "nav-link"
                  }
                  to="/product"
                >
                  Sản phẩm
                </Link>
                <Link
                  className={
                    currPage === "price" ? "nav-link active" : "nav-link"
                  }
                  to="/price"
                >
                  Bảng giá
                </Link>
                <Link
                  className={
                    currPage === "contact" ? "nav-link active" : "nav-link"
                  }
                  to="/contact"
                >
                  Liên hệ
                </Link>
                <Link
                  className={
                    currPage === "news" ? "nav-link active" : "nav-link"
                  }
                  to="/news"
                >
                  Tin tức
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <form className="d-flex">
                  <div className="input-group">
                    <input
                      className="form-control bg-white border-0 rounded-pill rounded-end shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="input-group-text bg-white border-0 rounded-pill rounded-start"
                      type="submit"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
                <Link to="/cart">
                  <button className="btn btn-outline-primary rounded-circle position-relative ms-4">
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-1 start-100 translate-middle bg-danger border border-light rounded-circle text-white px-2">
                      2<span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
