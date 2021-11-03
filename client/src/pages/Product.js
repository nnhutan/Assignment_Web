import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";

function Product() {
  return (
    <div className="product-page">
      <TopHeader />
      <Header currPage="product" />
      <h1 className="text-center">Product Page</h1>
    </div>
  );
}

export default Product;
