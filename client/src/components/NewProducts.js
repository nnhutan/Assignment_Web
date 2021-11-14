import React from "react";
import Product from "./Product";

function TopSellingPoducts({ products, addToCart }) {
  return (
    <div className="top-selling bg-light pb-5">
      <h3 className="text-center py-4">Sản phẩm mới</h3>
      <div className="container">
        <div className="row g-3">
          {products
            .filter((item) => item.category_name === "Apple")
            .map((product, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <Product product={product} addToCart={addToCart} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopSellingPoducts;
