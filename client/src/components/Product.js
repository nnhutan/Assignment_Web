import React from "react";
import { Link } from "react-router-dom";

const style = {
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
};

function Product({ product }) {
  const { name, price, thumbnail } = product;
  return (
    <div role="button" className="card" style={{}}>
      <img
        src={thumbnail}
        className="card-img-top"
        alt="..."
        style={{ width: "90%", maxHeight: "271px", margin:"auto", marginTop:"5%" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text" style={{fontWeight:"bold",fontSize:"20px"}}>${price}</p>
        <Link to="/checkout" className="btn btn-outline-primary btn-lg">
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default Product;
