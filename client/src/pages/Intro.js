import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";

function Intro() {
  return (
    <div className="intro-page">
      <TopHeader />
      <Header currPage="intro" />
      <h1 className="text-center">Intro page</h1>
    </div>
  );
}

export default Intro;
