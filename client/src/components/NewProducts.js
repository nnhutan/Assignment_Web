import React from "react";
import listProducts from "./listProducts";
import Product from "./Product";

function TopSellingPoducts() {
  return (
    <div className="top-selling bg-light mb-5">
      <h3 className="text-center py-4">Sản phẩm mới</h3>
      <div className="container">
        <div className="row g-2">
          {listProducts.map((product) => (
            <div className="col-lg-3">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSellingPoducts;