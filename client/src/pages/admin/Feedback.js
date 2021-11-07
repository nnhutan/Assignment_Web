import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../API/api";
import Header from "../../components/admin/Header";

function Feedback({ clickHandler, currUser }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.post(API + "comment.php", { action: "list" }).then((response) => {
      console.log(response.data);
      if (response.data.status === 1) {
        setComments(response.data.commentList);
      } else {
        alert(response.data.msg);
      }
    });
  }, []);

  const deleteHandler = (id) => {
    axios
      .post(API + "comment.php", { action: "delete", id: id })
      .then((response) => {
        if (response.data.status === 1) {
          setComments((prev) => prev.filter((item) => item.id !== id));
        } else {
          alert(response.data.msg);
        }
      });
  };

  return (
    <div className="container-fluid p-0">
      <Header
        clickHandler={clickHandler}
        currPage="feedback"
        currUser={currUser}
      />
      <div className="container">
        <h2 className="text-center my-4">Quản lý phản hồi, bình luận</h2>

        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thành viên</th>
              <th>Sản phẩm</th>
              <th>Nội dung</th>
              <th>Ngày đăng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {comments.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.fullname}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.created_at}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Feedback;
