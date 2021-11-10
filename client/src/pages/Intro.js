import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";
import IntroPage from "../components/IntroPage";
import Footer from "../components/Footer";
function Intro() {
  return (
    <div className="intro-page">
      <Header currPage="intro" />
      <IntroPage />
      <Footer />
    </div>
  );
}

export default Intro;
