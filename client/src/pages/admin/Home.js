import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Header from "../../components/admin/Header";

function Home({ clickHandler, currUser }) {
  return (
    <div className="container-fluid p-0">
      <Header clickHandler={clickHandler} currPage="home" currUser={currUser} />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-primary text-white">
              <div className="card-header">
                <h5 className="card-title">Sản phẩm</h5>
              </div>
              <div className=" card-body">
                <p className="card-text m-0">Mới nhập: 200 sản phẩm</p>
                <p className="card-text m-0">Tồn kho: 5000 sản phẩm</p>
                <p className="card-text">Đã xuất: 400 sản phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
