import React from "react";
import { Link } from "react-router-dom";

const style = {
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
};

function Product({ product }) {
  const { name, price, thumbnail } = product;
  return (
    <div role="button" className="card" style={style}>
      <img
        src={thumbnail}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", maxHeight: "271px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <Link to="/checkout" className="btn btn-primary">
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default Product;
