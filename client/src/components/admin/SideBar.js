import React from "react";

function SideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i
          className="bi bi-bootstrap-fill text-white me-2"
          style={{ fontSize: "32px" }}
        ></i>
        <span className="fs-4">The Bell</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="<?=$baseUrl?>category" className="nav-link text-white">
            <i className="bi bi-folder me-2 fs-5"></i>
            Quản lý danh mục
          </a>
        </li>
        <li>
          <a href="<?=$baseUrl?>product" className="nav-link text-white">
            <i className="bi bi-file-earmark-text me-2 fs-5"></i>
            Quản lý sản phẩm
          </a>
        </li>
        <li>
          <a href="<?=$baseUrl?>order" className="nav-link text-white">
            <i className="bi bi-minecart me-2 fs-5"></i>
            Quản lý đơn hàng
          </a>
        </li>
        <li>
          <a href="<?=$baseUrl?>feedback" className="nav-link text-white">
            <i className="bi bi-question-circle-fill me-2 fs-5"></i>
            Quản lý phản hồi
          </a>
        </li>
        <li>
          <a href="<?=$baseUrl?>user" className="nav-link text-white">
            <i className="bi bi-people-fill me-2 fs-5"></i>
            Quản lý người dùng
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;
