import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";

function News() {
  return (
    <div className="news-page">
      <TopHeader />
      <Header currPage="news" />
      <h1 className="text-center">News Page</h1>
    </div>
  );
}

export default News;
