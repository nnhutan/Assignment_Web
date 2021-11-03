import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";

function Home() {
  return (
    <div className="home-page">
      <TopHeader />
      <Header currPage="home" />
      <Slider />
      <TopSellingPoducts />
      <NewProducts />
    </div>
  );
}

export default Home;
