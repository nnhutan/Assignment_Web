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
  useEffect(() => {
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
  }, []);
  return (
    <div className="home-page">
      <Header currPage="home" />
      <Slider />
      <TopSellingPoducts products={products} />
      <NewProducts products={products} />
      <ServiceInfo />
      <Footer />
    </div>
  );
}

export default Home;
