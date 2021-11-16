import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../API/api";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NumberFormat from "react-number-format";
import Comment from "../components/Comment";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .post(API + "prod.php/getProduct", { id: id })
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
    axios
      .post(API + "com.php/listComment")
      .then((res) => setComments(res.data))
      .catch((res) => console.log(res));
    axios
      .post(API + "autth.php/login", {}, { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((res) => console.log(res));
  }, [state]);

  const addComment = (content) => {
    axios
      .post(API + "com.php/addComment", {
        user_id: user.id,
        product_id: id,
        content: content,
      })
      .then((res) => setState((prev) => !prev))
      .catch((res) => console.log(res));
  };

  const deleteComment = (id) => {
    axios
      .post(API + "com.php/deleteComment", {
        id: id,
      })
      .then((res) =>
        setComments((prev) => [...prev.filter((item) => item.id !== id)])
      )
      .catch((res) => console.log(res));
  };

  const editComment = (commentEdit) => {
    axios
      .post(API + "com.php/editComment", {
        ...commentEdit,
      })
      .then((res) =>
        // setComments((prev) => {
        //   prev[prev.findIndex((item) => item.id === commentEdit.id)].content =
        //     commentEdit.content;
        //   return [...prev];
        // })
        setState((prev) => !prev)
      )
      .catch((res) => console.log(res));
  };

  const commentsDisplayed = comments.filter((item) => item.product_id === id);

  return (
    <div className="product-detail-page">
      <Header currPage="" />
      <div className="container py-5">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="img text-center">
              <img src={product.thumbnail} alt="productdetail" className="" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="">
              <h3 className="title">{product.title}</h3>
              <p className="text-danger fw-bold fs-5">
                <NumberFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" ₫ "}
                />
              </p>
              <p className="text-secondary fst-italic">
                {product.description !== undefined &&
                  product.description.slice(0, 250)}
                ...
              </p>
              <button className="btn btn-outline-primary py-2 px-4">
                <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comment bg-light">
        <Comment
          comments={commentsDisplayed}
          addComment={addComment}
          user={user}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
