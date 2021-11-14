import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const style = {
  transition: "all 0.2s ease-in-out",
};

function Product({ product, addToCart }) {
  const { id, title, price, thumbnail } = product;
  return (
    <div role="button" className="card product-card" style={style}>
      <img
        src={thumbnail}
        className="card-img-top"
        alt="..."
        style={{
          width: "auto",
          maxHeight: "160px",
          margin: "auto",
          marginTop: "8px",
        }}
      />
      <div className="card-body text-center">
        <h6 className="card-title d-block" style={{ minHeight: "38px" }}>
          {title}
        </h6>
        <p className="card-text text-danger fw-bold">
          <NumberFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" ₫ "}
          />
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={() => addToCart(id)}
        >
          <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default Product;
