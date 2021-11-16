import React, { useState, useEffect } from "react";
import API from "../API/api";
import axios from "axios";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import ServiceInfo from "../components/ServiceInfo";
function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    axios
      .post(
        //API + "product.php",
        API + "prod.php/listProduct",
        { action: "list" }
      )
      .then((response) => {
        if (response.data.status === 1) setProducts(response.data.productList);
        else alert(response.data.msg);
      })
      .catch((res) => {
        alert(res);
      });
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
    authen();
  }, []);

  return (
    <div className="home-page">
      <Header currPage="home" />
      <Slider />
      <TopSellingPoducts products={products} addToCart={addToCart} />
      <NewProducts products={products} addToCart={addToCart} />
      <ServiceInfo />
      <Footer />
    </div>
  );
}

export default Home;
