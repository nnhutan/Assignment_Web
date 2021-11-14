import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../API/api";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Header({ currPage, cart }) {
  console.log(cart);
  // I'm sorry, it's only now that I see my stupidity.
  // I should have used Context Switch or something to avoid code duplication
  const [numProductInCart, setNumProductInCart] = useState(cart);
  const authen = () => {
    axios
      .post(
        //API + `authentication.php`,
        API + "autth.php/login",
        {
          action: "login",
        },
        { withCredentials: true }
      )
      .then((res) => {
        getCart(true, res.data.id);
        console.log(res.data);
      })
      .catch((res) => {
        getCart(false, "");
        console.log(res);
      });
  };

  const getCart = async (flag, id) => {
    if (flag) {
      axios
        .post(
          //API + `authentication.php`,
          API + "ord.php/listOrder"
        )
        .then((res) => {
          const orderId =
            res.data[res.data.findIndex((item) => item.user_id === id)].id;
          axios
            .post(
              //API + `authentication.php`,
              API + "order-.php/listOrderDetail",
              {
                action: "list",
                order_id: orderId,
              }
            )
            .then((res) => {
              setNumProductInCart(res.data.length);
            })
            .catch((res) => {
              console.log(res);
            });
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      console.log("use session");
    }
  };
  useEffect(() => {
    if (cart === undefined) {
      authen();
    } else setNumProductInCart(cart);
    window.addEventListener("scroll", function () {
      const mainNavbar = document.getElementById("main-navbar");
      if (mainNavbar !== null) {
        const topHeader_height =
          document.querySelector(".js-top-header").offsetHeight;
        if (window.scrollY >= topHeader_height) {
          mainNavbar.classList.add("fixed-top");
          // add padding top to show content behind navbar
          const navbar_height = document.querySelector(
            ".main-navbar__navbar"
          ).offsetHeight;
          document.body.style.paddingTop = navbar_height + "px";
        } else {
          mainNavbar.classList.remove("fixed-top");
          // remove padding top from body
          document.body.style.paddingTop = "0";
        }
      }
    });
  });
  return (
    <div className="bg-light main-navbar__navbar" id="main-navbar">
      <div className="container">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="logo" />
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
                  <div className="input-group input-group-sm">
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
                  <button
                    className={
                      currPage === "cart"
                        ? "btn btn-outline-primary rounded-circle position-relative ms-4 active"
                        : "btn btn-outline-primary rounded-circle position-relative ms-4"
                    }
                  >
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-1 start-100 translate-middle bg-danger border border-light rounded-circle text-white px-2">
                      {numProductInCart}
                      <span className="visually-hidden">New alerts</span>
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
