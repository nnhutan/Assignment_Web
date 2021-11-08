import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../API/api";
import Header from "../../components/admin/Header";
import TableComment from "../../components/admin/TableComment";
import Pagination from "../../components/Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const offset = (currentPage - 1) * itemPerPage;
  const numberPage = Math.ceil(comments.length / itemPerPage);
  const currComments = comments.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="container-fluid p-0">
      <Header
        clickHandler={clickHandler}
        currPage="feedback"
        currUser={currUser}
      />
      <div className="container">
        <h2 className="text-center my-4">Quản lý phản hồi, bình luận</h2>

        <TableComment
          comments={currComments}
          deleteHandler={deleteHandler}
          offset={offset}
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
  );
}

export default Feedback;
