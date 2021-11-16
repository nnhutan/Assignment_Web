import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../API/api";
import Header from "../components/Header";
import SidebarCategory from "../components/SidebarCategory";
import ProductGrid from "../components/ProductGrid";

function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currCate, setCurrCate] = useState("all");

  const getProducts = async () => {
    axios
      .post(
        //API + "product.php",
        API + "prod.php/listProduct",
        { action: "list" }
      )
      .then((response) => {
        setProducts(response.data.productList);
      })
      .catch((res) => {
        alert(res);
      });
  };

  const getCategories = async () => {
    axios
      .post(
        //API + "category.php"
        API + "cate.php/listCategory",
        { action: "list" }
      )
      .then((response) => setCategories(response.data));
  };

  const [ordId, setOrdId] = useState("");
  const getCart = async (flag, id) => {
    if (flag) {
      axios
        .post(API + "ord.php/listOrder")
        .then((res) => {
          const orderId =
            res.data[res.data.findIndex((item) => item.user_id === id)].id;
          setOrdId(orderId);
        })
        .catch((res) => console.log(res));
    }
  };

  // this state is only used to force page rerender
  const [state, setState] = useState(true);
  const addToCart = (productId) => {
    if (ordId !== "") {
      axios
        .post(API + "order-.php/addOrderDetail", {
          order_id: ordId,
          product_id: productId,
          num: 1,
        })
        .then((res) => {
          setState((prev) => !prev);
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      axios
        .post(
          API + "cart.php/addToCart",
          {
            id: productId,
            num: 1,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setState((prev) => {
            prev = !state;
            return prev;
          });
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  useEffect(() => {
    const authen = () => {
      axios
        .post(
          //API + `authentication.php`,
          API + "autth.php/login",
          {
            action: "login",
          },
          { withCredentials: true }
        )
        .then((res) => {
          getCart(true, res.data.id);
        })
        .catch((res) => {
          console.log(res);
        });
    };

    getProducts();
    getCategories();
    authen();
  }, []);
  var productsDisplayed =
    currCate === "all"
      ? products
      : products.filter((item) => item.category_id === currCate);
  const setProductDisplayed = (cId) => {
    console.log(cId);
    setCurrCate(cId);
  };
  return (
    <div className="product-page">
      <Header currPage="product" />
      <div className="container py-4">
        <div className="row g-2">
          <div className="col-lg-2">
            <SidebarCategory
              categories={categories}
              setProductDisplayed={setProductDisplayed}
            />
          </div>
          <div className="col-lg-10">
            <ProductGrid products={productsDisplayed} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
