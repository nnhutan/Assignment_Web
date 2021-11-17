import React, { useContext, useState } from "react";
import Header from "../../components/admin/Header";
import TableComment from "../../components/admin/TableComment";
import Pagination from "../../components/Pagination";
import { Data } from "../../Context";

function Feedback() {
  const { comments, deleteComment } = useContext(Data);

  const deleteHandler = (id) => {
    deleteComment(id);
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
      <Header currPage="feedback" />
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
