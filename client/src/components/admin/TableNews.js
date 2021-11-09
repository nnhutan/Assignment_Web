import React from "react";

function TableNews({
  newsList,
  seeDetail,
  editHandler,
  deleteHandler,
  offset,
}) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Hình ảnh</th>
          <th>Nội dung</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {newsList.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1 + offset}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.thumbnail}
                  alt="image"
                  style={{ maxWidth: "60px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-success seeDetail"
                  onClick={() => seeDetail(item.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Xem chi tiết
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editHandler(item.id, item)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandler(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableNews;