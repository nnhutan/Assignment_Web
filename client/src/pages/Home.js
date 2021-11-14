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
  const [cart, setCart] = useState([]);
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
        console.log(res.data);
      })
      .catch((res) => {
        getCart(false, "");
        console.log(res);
      });
  };

  const [ordId, setOrdId] = useState("");
  const getCart = async (flag, id) => {
    if (flag) {
      axios
        .post(
          //API + `authentication.php`,
          API + "ord.php/listOrder"
        )
        .then((res) => {
          const orderId =
            res.data[res.data.findIndex((item) => item.user_id === id)].id;
          setOrdId(orderId);
          axios
            .post(
              //API + `authentication.php`,
              API + "order-.php/listOrderDetail",
              {
                action: "list",
                order_id: orderId,
              }
            )
            .then((res) => {
              setCart(res.data.length);
            })
            .catch((res) => {
              console.log(res);
            });
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      console.log("use session");
    }
  };

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

  useEffect(() => {
    getProducts();
    authen();
  }, []);

  const addToCart = (productId) => {
    if (ordId !== "") {
      axios
        .post(
          //API + `authentication.php`,
          API + "order-.php/addOrderDetail",
          {
            order_id: ordId,
            product_id: productId,
            num: 1,
          }
        )
        .then((res) => {
          if (res.data === "insert") setCart((prev) => prev + 1);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className="home-page">
      <Header currPage="home" cart={cart} />
      <Slider />
      <TopSellingPoducts products={products} addToCart={addToCart} />
      <NewProducts products={products} addToCart={addToCart} />
      <ServiceInfo />
      <Footer />
    </div>
  );
}

export default Home;
