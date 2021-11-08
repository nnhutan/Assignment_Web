import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="home-page">
      <Header currPage="home" />
      <Slider />
      <TopSellingPoducts />
      <NewProducts />
      <Footer />
    </div>
  );
}

export default Home;
